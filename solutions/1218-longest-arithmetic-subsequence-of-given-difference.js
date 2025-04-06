/**
 * 1218. Longest Arithmetic Subsequence of Given Difference
 * https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/
 * Difficulty: Medium
 *
 * Given an integer array arr and an integer difference, return the length of the longest
 * subsequence in arr which is an arithmetic sequence such that the difference between adjacent
 * elements in the subsequence equals difference.
 *
 * A subsequence is a sequence that can be derived from arr by deleting some or no elements without
 * changing the order of the remaining elements.
 */

/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  const sequenceLengths = new Map();
  let result = 0;

  for (const num of arr) {
    const prevNum = num - difference;
    const currentLength = (sequenceLengths.get(prevNum) || 0) + 1;
    sequenceLengths.set(num, currentLength);
    result = Math.max(result, currentLength);
  }

  return result;
};
