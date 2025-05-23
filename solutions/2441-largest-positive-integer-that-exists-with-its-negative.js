/**
 * 2441. Largest Positive Integer That Exists With Its Negative
 * https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
 * Difficulty: Easy
 *
 * Given an integer array nums that does not contain any zeros, find the largest positive
 * integer k such that -k also exists in the array.
 *
 * Return the positive integer k. If there is no such integer, return -1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
  const set = new Set();
  let result = -1;

  for (const num of nums) {
    if (set.has(-num)) {
      result = Math.max(result, Math.abs(num));
    }
    set.add(num);
  }

  return result;
};
