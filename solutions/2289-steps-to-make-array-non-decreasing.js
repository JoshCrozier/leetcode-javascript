/**
 * 2289. Steps to Make Array Non-decreasing
 * https://leetcode.com/problems/steps-to-make-array-non-decreasing/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums. In one step, remove all elements nums[i]
 * where nums[i - 1] > nums[i] for all 0 < i < nums.length.
 *
 * Return the number of steps performed until nums becomes a non-decreasing array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function(nums) {
  const n = nums.length;
  const stack = [];
  const steps = new Array(n).fill(0);
  let result = 0;

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      const j = stack.pop();
      steps[i] = Math.max(steps[i] + 1, steps[j]);
    }
    result = Math.max(result, steps[i]);
    stack.push(i);
  }

  return result;
};
