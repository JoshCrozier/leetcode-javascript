/**
 * 581. Shortest Unsorted Continuous Subarray
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 * Difficulty: Medium
 *
 * Given an integer array nums, you need to find one continuous subarray such that if you
 * only sort this subarray in non-decreasing order, then the whole array will be sorted
 * in non-decreasing order.
 *
 * Return the shortest such subarray and output its length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let start = -1;
  let end = -2;

  for (let i = 1, min = nums[nums.length - 1], max = nums[0]; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[nums.length - 1 - i]);
    if (nums[i] < max) {
      end = i;
    }
    if (nums[nums.length - 1 - i] > min) {
      start = nums.length - 1 - i;
    }
  }

  return end - start + 1;
};
