/**
 * 2341. Maximum Number of Pairs in Array
 * https://leetcode.com/problems/maximum-number-of-pairs-in-array/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums. In one operation, you may do the following:
 * - Choose two integers in nums that are equal.
 * - Remove both integers from nums, forming a pair.
 *
 * The operation is done on nums as many times as possible.
 *
 * Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that
 * are formed and answer[1] is the number of leftover integers in nums after doing the operation
 * as many times as possible.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
  const frequency = new Map();
  let pairs = 0;

  for (const num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
    if (frequency.get(num) === 2) {
      pairs++;
      frequency.set(num, 0);
    }
  }

  const leftovers = nums.length - pairs * 2;
  return [pairs, leftovers];
};
