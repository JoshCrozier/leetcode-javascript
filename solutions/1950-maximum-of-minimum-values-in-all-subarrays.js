/**
 * 1950. Maximum of Minimum Values in All Subarrays
 * https://leetcode.com/problems/maximum-of-minimum-values-in-all-subarrays/
 * Difficulty: Medium
 *
 * You are given an integer array nums of size n. You are asked to solve n queries for each
 * integer i in the range 0 <= i < n.
 *
 * To solve the ith query:
 * 1. Find the minimum value in each possible subarray of size i + 1 of the array nums.
 * 2. Find the maximum of those minimum values. This maximum is the answer to the query.
 *
 * Return a 0-indexed integer array ans of size n such that ans[i] is the answer to the ith query.
 *
 * A subarray is a contiguous sequence of elements in an array.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMaximums = function(nums) {
  const n = nums.length;
  const result = new Array(n);
  const leftBound = new Array(n);
  const rightBound = new Array(n);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
      stack.pop();
    }
    leftBound[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
    stack.push(i);
  }

  stack.length = 0;

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
      stack.pop();
    }
    rightBound[i] = stack.length > 0 ? stack[stack.length - 1] : n;
    stack.push(i);
  }

  result.fill(0);

  for (let i = 0; i < n; i++) {
    const maxSubarrayLength = rightBound[i] - leftBound[i] - 1;
    result[maxSubarrayLength - 1] = Math.max(result[maxSubarrayLength - 1], nums[i]);
  }

  for (let i = n - 2; i >= 0; i--) {
    result[i] = Math.max(result[i], result[i + 1]);
  }

  return result;
};
