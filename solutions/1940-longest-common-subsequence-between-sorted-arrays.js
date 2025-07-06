/**
 * 1940. Longest Common Subsequence Between Sorted Arrays
 * https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/
 * Difficulty: Medium
 *
 * Given an array of integer arrays arrays where each arrays[i] is sorted in strictly increasing
 * order, return an integer array representing the longest common subsequence among all the arrays.
 *
 * A subsequence is a sequence that can be derived from another sequence by deleting some elements
 * (possibly none) without changing the order of the remaining elements.
 */

/**
 * @param {number[][]} arrays
 * @return {number[]}
 */
var longestCommonSubsequence = function(arrays) {
  const map = new Map();
  const totalArrays = arrays.length;

  for (const array of arrays) {
    for (const num of array) {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }

  const result = [];
  for (const [num, count] of map) {
    if (count === totalArrays) {
      result.push(num);
    }
  }

  return result.sort((a, b) => a - b);
};
