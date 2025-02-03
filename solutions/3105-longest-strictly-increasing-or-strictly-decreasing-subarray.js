/**
 * 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
 * https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/
 * Difficulty: Easy
 *
 * You are given an array of integers nums. Return the length of the longest subarray of nums
 * which is either strictly increasing or strictly decreasing.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
  let result = nums.length > 0 ? 1 : 0;
  for (let i = 1, down = 1, up = 1; i < nums.length; i++) {
    nums[i - 1] > nums[i] ? down++ : down = 1;
    nums[i - 1] < nums[i] ? up++ : up = 1;
    result = Math.max(result, down, up);
  }
  return result;
};
