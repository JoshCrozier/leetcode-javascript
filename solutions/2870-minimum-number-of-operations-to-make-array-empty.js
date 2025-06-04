/**
 * 2870. Minimum Number of Operations to Make Array Empty
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array nums consisting of positive integers.
 *
 * There are two types of operations that you can apply on the array any number of times:
 * - Choose two elements with equal values and delete them from the array.
 * - Choose three elements with equal values and delete them from the array.
 *
 * Return the minimum number of operations required to make the array empty, or -1 if it is
 * not possible.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let result = 0;
  for (const count of map.values()) {
    if (count === 1) return -1;
    result += Math.ceil(count / 3);
  }

  return result;
};
