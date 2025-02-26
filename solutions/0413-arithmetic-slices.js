/**
 * 413. Arithmetic Slices
 * https://leetcode.com/problems/arithmetic-slices/
 * Difficulty: Medium
 *
 * An integer array is called arithmetic if it consists of at least three elements and if
 * the difference between any two consecutive elements is the same.
 *
 * For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
 *
 * Given an integer array nums, return the number of arithmetic subarrays of nums.
 *
 * A subarray is a contiguous subsequence of the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  if (nums.length < 3) return 0;
  let result = 0;

  for (let i = 2, value = 0; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      value++;
      result += value;
    } else {
      value = 0;
    }
  }

  return result;
};
