/**
 * 896. Monotonic Array
 * https://leetcode.com/problems/monotonic-array/
 * Difficulty: Easy
 *
 * An array is monotonic if it is either monotone increasing or monotone decreasing.
 *
 * An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums
 * is monotone decreasing if for all i <= j, nums[i] >= nums[j].
 *
 * Given an integer array nums, return true if the given array is monotonic, or false otherwise.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  const isIncreasing = nums.every((num, i) => i === 0 || num >= nums[i - 1]);
  const isDecreasing = nums.every((num, i) => i === 0 || num <= nums[i - 1]);
  return isIncreasing || isDecreasing;
};
