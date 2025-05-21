/**
 * 2348. Number of Zero-Filled Subarrays
 * https://leetcode.com/problems/number-of-zero-filled-subarrays/
 * Difficulty: Medium
 *
 * Given an integer array nums, return the number of subarrays filled with 0.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
  let result = 0;
  let zeroCount = 0;

  for (const num of nums) {
    if (num === 0) {
      zeroCount++;
      result += zeroCount;
    } else {
      zeroCount = 0;
    }
  }

  return result;
};
