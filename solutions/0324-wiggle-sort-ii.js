/**
 * 324. Wiggle Sort II
 * https://leetcode.com/problems/wiggle-sort-ii/
 * Difficulty: Medium
 *
 * Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]
 *
 * You may assume the input array always has a valid answer.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  nums.sort((a, b) => a - b);
  const m = Math.floor((nums.length - 1) / 2);
  for (let i = 0, l = m, r = nums.length - 1, t = [...nums]; i < nums.length; i++) {
    nums[i] = i % 2 ? t[r--] : t[l--];
  }
};
