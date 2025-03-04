/**
 * 516. Longest Palindromic Subsequence
 * https://leetcode.com/problems/longest-palindromic-subsequence/
 * Difficulty: Medium
 *
 * Given a string s, find the longest palindromic subsequence's length in s.
 *
 * A subsequence is a sequence that can be derived from another sequence by deleting some
 * or no elements without changing the order of the remaining elements.
 */

/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const dp = new Array(s.length).fill(0);

  for (let i = s.length - 1, previous; i >= 0; i--) {
    previous = dp.slice();
    dp[i] = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[j] = (previous[j - 1] || 0) + 2;
      } else {
        dp[j] = Math.max(dp[j - 1], previous[j]);
      }
    }
  }

  return dp[s.length - 1];
};
