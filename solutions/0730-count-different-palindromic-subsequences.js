/**
 * 730. Count Different Palindromic Subsequences
 * https://leetcode.com/problems/count-different-palindromic-subsequences/
 * Difficulty: Hard
 *
 * Given a string s, return the number of different non-empty palindromic subsequences in s.
 * Since the answer may be very large, return it modulo 109 + 7.
 *
 * A subsequence of a string is obtained by deleting zero or more characters from the string.
 *
 * A sequence is palindromic if it is equal to the sequence reversed.
 *
 * Two sequences a1, a2, ... and b1, b2, ... are different if there is some i for which ai != bi.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequences = function(s) {
  const MOD = 1e9 + 7;
  const dp = new Array(s.length).fill().map(() => {
    return new Array(s.length).fill(0);
  });

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
  }

  for (let len = 2; len <= s.length; len++) {
    for (let start = 0; start + len <= s.length; start++) {
      const end = start + len - 1;
      const charStart = s[start];
      const charEnd = s[end];

      if (charStart !== charEnd) {
        dp[start][end] = (dp[start + 1][end] + dp[start][end - 1] - dp[start + 1][end - 1]) % MOD;
      } else {
        let left = start + 1;
        let right = end - 1;

        while (left <= right && s[left] !== charStart) left++;
        while (left <= right && s[right] !== charStart) right--;

        if (left > right) {
          dp[start][end] = (2 * dp[start + 1][end - 1] + 2) % MOD;
        } else if (left === right) {
          dp[start][end] = (2 * dp[start + 1][end - 1] + 1) % MOD;
        } else {
          dp[start][end] = (2 * dp[start + 1][end - 1] - dp[left + 1][right - 1]) % MOD;
        }
      }

      if (dp[start][end] < 0) dp[start][end] += MOD;
    }
  }

  return dp[0][s.length - 1];
};
