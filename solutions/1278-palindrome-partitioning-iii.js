/**
 * 1278. Palindrome Partitioning III
 * https://leetcode.com/problems/palindrome-partitioning-iii/
 * Difficulty: Hard
 *
 * You are given a string s containing lowercase letters and an integer k. You need to:
 * - First, change some characters of s to other lowercase English letters.
 * - Then divide s into k non-empty disjoint substrings such that each substring is a palindrome.
 *
 * Return the minimal number of characters that you need to change to divide the string.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var palindromePartition = function(s, k) {
  const n = s.length;
  const cost = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len <= n; i++) {
      const j = i + len - 1;
      cost[i][j] = cost[i + 1][j - 1] + (s[i] === s[j] ? 0 : 1);
    }
  }

  const dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(Infinity));
  dp[0][0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.min(i, k); j++) {
      for (let m = 0; m < i; m++) {
        dp[i][j] = Math.min(dp[i][j], dp[m][j - 1] + cost[m][i - 1]);
      }
    }
  }

  return dp[n][k];
};
