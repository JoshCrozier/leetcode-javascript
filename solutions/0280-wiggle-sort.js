/**
 * 280. Wiggle Sort
 * https://leetcode.com/problems/wiggle-sort/
 * Difficulty: Medium
 *
 * Given an integer array nums, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....
 *
 * You may assume the input array always has a valid answer.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    if (i % 2 === 0 && nums[i] > nums[i + 1]) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    } else if (i % 2 === 1 && nums[i] < nums[i + 1]) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }
  }
};
