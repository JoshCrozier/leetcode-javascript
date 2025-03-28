/**
 * 962. Maximum Width Ramp
 * https://leetcode.com/problems/maximum-width-ramp/
 * Difficulty: Medium
 *
 * A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j].
 * The width of such a ramp is j - i.
 *
 * Given an integer array nums, return the maximum width of a ramp in nums. If there is no
 * ramp in nums, return 0.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
  const stack = [];
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!stack.length || nums[stack.at(-1)] > nums[i]) {
      stack.push(i);
    }
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    while (stack.length && nums[stack.at(-1)] <= nums[j]) {
      result = Math.max(result, j - stack.pop());
    }
  }

  return result;
};
