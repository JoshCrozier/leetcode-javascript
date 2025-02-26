/**
 * 1749. Maximum Absolute Sum of Any Subarray
 * https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/
 * Difficulty: Medium
 *
 * You are given an integer array nums. The absolute sum of a subarray
 * [numsl, numsl+1, ..., numsr-1, numsr] is abs(numsl + numsl+1 + ... + numsr-1 + numsr).
 *
 * Return the maximum absolute sum of any (possibly empty) subarray of nums.
 *
 * Note that abs(x) is defined as follows:
 * - If x is a negative integer, then abs(x) = -x.
 * - If x is a non-negative integer, then abs(x) = x.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
  let result = 0;

  for (let i = 0, min = 0, max = 0; i < nums.length; i++) {
    max = Math.max(nums[i], max + nums[i]);
    min = Math.min(nums[i], min + nums[i]);
    result = Math.max(result, Math.abs(max), Math.abs(min));
  }

  return result;
};
