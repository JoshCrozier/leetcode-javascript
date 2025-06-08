/**
 * 163. Missing Ranges
 * https://leetcode.com/problems/missing-ranges/
 * Difficulty: Easy
 *
 * You are given an inclusive range [lower, upper] and a sorted unique integer array nums,
 * where all elements are within the inclusive range.
 *
 * A number x is considered missing if x is in the range [lower, upper] and x is not in nums.
 *
 * Return the shortest sorted list of ranges that exactly covers all the missing numbers.
 * That is, no element of nums is included in any of the ranges, and each missing number
 * is covered by one of the ranges.
 */

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function(nums, lower, upper) {
  const result = [];
  let prev = lower - 1;

  for (let i = 0; i <= nums.length; i++) {
    const curr = i < nums.length ? nums[i] : upper + 1;
    if (curr - prev > 1) {
      result.push([prev + 1, curr - 1]);
    }
    prev = curr;
  }

  return result;
};
