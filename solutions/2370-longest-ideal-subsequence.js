/**
 * 2370. Longest Ideal Subsequence
 * https://leetcode.com/problems/longest-ideal-subsequence/
 * Difficulty: Medium
 *
 * You are given a string s consisting of lowercase letters and an integer k. We call a string
 * t ideal if the following conditions are satisfied:
 * - t is a subsequence of the string s.
 * - The absolute difference in the alphabet order of every two adjacent letters in t is less
 *   than or equal to k.
 *
 * Return the length of the longest ideal string.
 *
 * A subsequence is a string that can be derived from another string by deleting some or no
 * characters without changing the order of the remaining characters.
 *
 * Note that the alphabet order is not cyclic. For example, the absolute difference in the
 * alphabet order of 'a' and 'z' is 25, not 1.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
  const dp = new Array(26).fill(0);
  let result = 0;

  for (const char of s) {
    const idx = char.charCodeAt(0) - 97;
    let currentMax = 0;

    for (let i = Math.max(0, idx - k); i <= Math.min(25, idx + k); i++) {
      currentMax = Math.max(currentMax, dp[i]);
    }

    dp[idx] = currentMax + 1;
    result = Math.max(result, dp[idx]);
  }

  return result;
};
