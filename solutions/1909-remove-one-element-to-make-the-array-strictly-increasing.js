/**
 * 1909. Remove One Element to Make the Array Strictly Increasing
 * https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
 * Difficulty: Easy
 *
 * Given a 0-indexed integer array nums, return true if it can be made strictly increasing after
 * removing exactly one element, or false otherwise. If the array is already strictly increasing,
 * return true.
 *
 * The array nums is strictly increasing if nums[i - 1] < nums[i] for each index
 * (1 <= i < nums.length).
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (isStrictlyIncreasing(nums, i)) return true;
  }

  return false;

  function isStrictlyIncreasing(arr, skipIndex) {
    for (let i = 1; i < arr.length; i++) {
      if (i === skipIndex) continue;
      const prev = i - 1 === skipIndex ? i - 2 : i - 1;
      if (prev >= 0 && arr[i] <= arr[prev]) return false;
    }
    return true;
  }
};
