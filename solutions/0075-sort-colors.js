/**
 * 75. Sort Colors
 * https://leetcode.com/problems/sort-colors/
 * Difficulty: Medium
 *
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so
 * that objects of the same color are adjacent, with the colors in the order red, white,
 * and blue.
 *
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue,
 * respectively.
 *
 * You must solve this problem without using the library's sort function.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const count = nums.reduce((a, n) => ++a[n] && a, [0, 0, 0]);
  for (let i = 0, j = 0; i < count.length; i++) {
    for (let k = 0; k < count[i]; k++) {
      nums[j++] = i;
    }
  }
  return nums;
};
