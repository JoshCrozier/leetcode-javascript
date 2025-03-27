/**
 * 940. Distinct Subsequences II
 * https://leetcode.com/problems/distinct-subsequences-ii/
 * Difficulty: Hard
 *
 * Given a string s, return the number of distinct non-empty subsequences of s. Since the answer
 * may be very large, return it modulo 109 + 7.
 *
 * A subsequence of a string is a new string that is formed from the original string by deleting
 * some (can be none) of the characters without disturbing the relative positions of the remaining
 * characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not.
 */

/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
  const MOD = 1e9 + 7;
  const lastOccurrence = new Array(26).fill(-1);
  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < s.length; i++) {
    const charIndex = s.charCodeAt(i) - 97;
    dp[i + 1] = (dp[i] * 2) % MOD;
    if (lastOccurrence[charIndex] !== -1) {
      dp[i + 1] = (dp[i + 1] - dp[lastOccurrence[charIndex]] + MOD) % MOD;
    }
    lastOccurrence[charIndex] = i;
  }

  return (dp[s.length] - 1 + MOD) % MOD;
};
