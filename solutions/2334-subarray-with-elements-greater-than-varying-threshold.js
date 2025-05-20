/**
 * 2334. Subarray With Elements Greater Than Varying Threshold
 * https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/
 * Difficulty: Hard
 *
 * You are given an integer array nums and an integer threshold.
 *
 * Find any subarray of nums of length k such that every element in the subarray is greater
 * than threshold / k.
 *
 * Return the size of any such subarray. If there is no such subarray, return -1.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var validSubarraySize = function(nums, threshold) {
  const n = nums.length;
  const stack = [];
  const nextSmaller = new Array(n).fill(n);
  const prevSmaller = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) {
      nextSmaller[stack.pop()] = i;
    }
    if (stack.length) prevSmaller[i] = stack[stack.length - 1];
    stack.push(i);
  }

  for (let i = 0; i < n; i++) {
    const k = nextSmaller[i] - prevSmaller[i] - 1;
    if (k > 0 && nums[i] > threshold / k) {
      return k;
    }
  }

  return -1;
};
