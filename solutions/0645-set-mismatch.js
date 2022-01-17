/**
 * 645. Set Mismatch
 * https://leetcode.com/problems/set-mismatch/
 * Difficulty: Medium
 *
 * You have a set of integers s, which originally contains all the numbers from 1 to n.
 * Unfortunately, due to some error, one of the numbers in s got duplicated to another
 * number in the set, which results in repetition of one number and loss of another number.
 *
 * You are given an integer array nums representing the data status of this set after
 * the error.
 *
 * Find the number that occurs twice and the number that is missing and return them in
 * the form of an array.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const set = new Set();
  const result = [];

  for (const n of nums) {
    if (set.has(n)) {
      result.push(n);
    }
    set.add(n);
  }

  for (let i = nums.length; i > 0; i--) {
    if (!set.has(i)) {
      result.push(i);
      break;
    }
  }

  return result;
};
