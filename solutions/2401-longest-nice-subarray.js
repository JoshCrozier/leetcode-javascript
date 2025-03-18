/**
 * 2401. Longest Nice Subarray
 * https://leetcode.com/problems/longest-nice-subarray/
 * Difficulty: Medium
 *
 * You are given an array nums consisting of positive integers.
 *
 * We call a subarray of nums nice if the bitwise AND of every pair of elements that are in
 * different positions in the subarray is equal to 0.
 *
 * Return the length of the longest nice subarray.
 *
 * A subarray is a contiguous part of an array.
 *
 * Note that subarrays of length 1 are always considered nice.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
  let result = 1;
  let left = 0;
  let usedBits = 0;

  for (let right = 0; right < nums.length; right++) {
    while ((usedBits & nums[right]) !== 0) {
      usedBits ^= nums[left];
      left++;
    }
    usedBits |= nums[right];
    result = Math.max(result, right - left + 1);
  }

  return result;
};
