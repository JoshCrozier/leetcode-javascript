/**
 * 2832. Maximal Range That Each Element Is Maximum in It
 * https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array nums of distinct integers.
 *
 * Let us define a 0-indexed array ans of the same length as nums in the following way:
 * - ans[i] is the maximum length of a subarray nums[l..r], such that the maximum element
 *   in that subarray is equal to nums[i].
 *
 * Return the array ans.
 *
 * Note that a subarray is a contiguous part of the array.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maximumLengthOfRanges = function(nums) {
  const n = nums.length;
  const leftBounds = new Array(n);
  const rightBounds = new Array(n);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      stack.pop();
    }
    leftBounds[i] = stack.length > 0 ? stack[stack.length - 1] + 1 : 0;
    stack.push(i);
  }

  stack.length = 0;

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      stack.pop();
    }
    rightBounds[i] = stack.length > 0 ? stack[stack.length - 1] - 1 : n - 1;
    stack.push(i);
  }

  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = rightBounds[i] - leftBounds[i] + 1;
  }

  return result;
};
