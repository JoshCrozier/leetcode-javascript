/**
 * 1800. Maximum Ascending Subarray Sum
 * https://leetcode.com/problems/maximum-ascending-subarray-sum/
 * Difficulty: Easy
 *
 * Given an array of positive integers nums, return the maximum possible sum of an
 * ascending subarray in nums.
 *
 * A subarray is defined as a contiguous sequence of numbers in an array.
 *
 * A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where
 * l <= i < r, numsi  < numsi+1. Note that a subarray of size 1 is ascending.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let result = nums[0];
  for (let i = 1, max = nums[0]; i < nums.length; i++) {
    max = nums[i] > nums[i - 1] ? max + nums[i] : nums[i];
    result = Math.max(result, max);
  }
  return result;
};
