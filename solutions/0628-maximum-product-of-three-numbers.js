/**
 * 628. Maximum Product of Three Numbers
 * https://leetcode.com/problems/maximum-product-of-three-numbers/
 * Difficulty: Easy
 *
 * Given an integer array, find three numbers whose
 * product is maximum and output the maximum product.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3]);
};
