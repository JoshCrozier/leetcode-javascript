/**
 * 2733. Neither Minimum nor Maximum
 * https://leetcode.com/problems/neither-minimum-nor-maximum/
 * Difficulty: Easy
 *
 * Given an integer array nums containing distinct positive integers, find and return any
 * number from the array that is neither the minimum nor the maximum value in the array,
 * or -1 if there is no such number.
 *
 * Return the selected integer.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
  if (nums.length < 3) return -1;
  const minVal = Math.min(nums[0], nums[1], nums[2]);
  const maxVal = Math.max(nums[0], nums[1], nums[2]);

  for (const num of [nums[0], nums[1], nums[2]]) {
    if (num !== minVal && num !== maxVal) return num;
  }

  return -1;
};
