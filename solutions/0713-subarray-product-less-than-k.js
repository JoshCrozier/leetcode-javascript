/**
 * 713. Subarray Product Less Than K
 * https://leetcode.com/problems/subarray-product-less-than-k/
 * Difficulty: Medium
 *
 * Your are given an array of positive integers nums.
 *
 * Count and print the number of (contiguous) subarrays where the
 * product of all the elements in the subarray is less than k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let result = 0;
  for (let right = 0, left = 0, product = 1; right < nums.length; right++) {
    product *= nums[right];
    while (product >= k && left < nums.length) {
      product /= nums[left];
      left++;
    }
    if (left < nums.length) {
      result = result + right - left + 1;
    }
  }
  return result;
};
