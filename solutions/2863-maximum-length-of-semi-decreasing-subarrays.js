/**
 * 2863. Maximum Length of Semi-Decreasing Subarrays
 * https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/
 * Difficulty: Medium
 *
 * You are given an integer array nums.
 *
 * Return the length of the longest semi-decreasing subarray of nums, and 0 if there are no
 * such subarrays.
 * - A subarray is a contiguous non-empty sequence of elements within an array.
 * - A non-empty array is semi-decreasing if its first element is strictly greater than its
 *   last element.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarrayLength = function(nums) {
  const n = nums.length;
  const stack = [];

  for (let i = n - 1; i >= 0; i--) {
    if (stack.length === 0 || nums[i] < nums[stack[stack.length - 1]]) {
      stack.push(i);
    }
  }

  let result = 0;
  let maxSeen = -Infinity;
  for (let i = 0; i < n && stack.length > 0; i++) {
    while (stack.length > 0 && stack[stack.length - 1] <= i) {
      stack.pop();
    }

    if (nums[i] > maxSeen) {
      maxSeen = nums[i];
      while (stack.length > 0 && nums[stack[stack.length - 1]] < maxSeen) {
        result = Math.max(result, stack[stack.length - 1] - i + 1);
        stack.pop();
      }
    }
  }

  return result;
};
