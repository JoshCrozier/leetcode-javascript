/**
 * 2419. Longest Subarray With Maximum Bitwise AND
 * https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/
 * Difficulty: Medium
 *
 * You are given an integer array nums of size n.
 *
 * Consider a non-empty subarray from nums that has the maximum possible bitwise AND.
 * - In other words, let k be the maximum value of the bitwise AND of any subarray of nums.
 *   Then, only subarrays with a bitwise AND equal to k should be considered.
 *
 * Return the length of the longest such subarray.
 *
 * The bitwise AND of an array is the bitwise AND of all the numbers in it.
 *
 * A subarray is a contiguous sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  const maxValue = Math.max(...nums);
  let result = 0;
  let currentLength = 0;

  for (const num of nums) {
    if (num === maxValue) {
      currentLength++;
      result = Math.max(result, currentLength);
    } else {
      currentLength = 0;
    }
  }

  return result;
};
