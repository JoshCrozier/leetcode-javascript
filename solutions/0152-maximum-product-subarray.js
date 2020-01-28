/**
 * 152. Maximum Product Subarray
 * https://leetcode.com/problems/maximum-product-subarray/
 * Difficulty: Medium
 *
 * Given an integer array nums, find the contiguous subarray within an array
 * (containing at least one number) which has the largest product.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let result = nums[0];
  let min = 1;
  let max = 1;
  for (let n of nums) {
    [min, max] = [Math.min(n, min * n, max * n), Math.max(n, min * n, max * n)];
    result = Math.max(result, max);
  }
  return result;
};
