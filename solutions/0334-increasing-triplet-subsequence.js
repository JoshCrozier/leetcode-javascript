/**
 * 334. Increasing Triplet Subsequence
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 * Difficulty: Medium
 *
 * Given an integer array nums, return true if there exists a triple of indices
 * (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such
 * indices exists, return false.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let first = Infinity;
  let second = Infinity;

  for (const current of nums) {
    if (current > second && current > first) {
      return true;
    }
    if (current > first) {
      second = current;
    } else {
      first = current;
    }
  }

  return false;
};
