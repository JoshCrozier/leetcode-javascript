/**
 * 2495. Number of Subarrays Having Even Product
 * https://leetcode.com/problems/number-of-subarrays-having-even-product/
 * Difficulty: Medium
 *
 * Given a 0-indexed integer array nums, return the number of subarrays of nums having an
 * even product.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var evenProduct = function(nums) {
  const n = nums.length;
  const totalSubarrays = (n * (n + 1)) / 2;
  let oddProductSubarrays = 0;
  let currentOddLength = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 1) {
      currentOddLength++;
    } else {
      oddProductSubarrays += (currentOddLength * (currentOddLength + 1)) / 2;
      currentOddLength = 0;
    }
  }

  oddProductSubarrays += (currentOddLength * (currentOddLength + 1)) / 2;

  return totalSubarrays - oddProductSubarrays;
};
