/**
 * 1464. Maximum Product of Two Elements in an Array
 * https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
 * Difficulty: Easy
 *
 * Given the array of integers nums, you will choose two different indices i and j
 * of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const [a, b] = nums.sort((a, b) => b - a);
  return (a - 1) * (b - 1);
};
