/**
 * 1531. String Compression II
 * https://leetcode.com/problems/string-compression-ii/
 * Difficulty: Hard
 *
 * Run-length encoding is a string compression method that works by replacing consecutive
 * identical characters (repeated 2 or more times) with the concatenation of the character
 * and the number marking the count of the characters (length of the run). For example,
 * to compress the string "aabccc" we replace "aa" by "a2" and replace "ccc" by "c3". Thus
 * the compressed string becomes "a2bc3".
 *
 * Notice that in this problem, we are not adding '1' after single characters.
 *
 * Given a string s and an integer k. You need to delete at most k characters from s such that
 * the run-length encoded version of s has minimum length.
 *
 * Find the minimum length of the run-length encoded version of s after deleting at most
 * k characters.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function(s, k) {
  const n = s.length;
  const dp = new Array(n + 1).fill().map(() => new Array(k + 1).fill(9999));
  dp[0][0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      let count = 0;
      let deletions = 0;

      for (let m = i; m >= 1; m--) {
        if (s[m - 1] === s[i - 1]) count++;
        else deletions++;

        if (j - deletions >= 0) {
          dp[i][j] = Math.min(
            dp[i][j],
            dp[m - 1][j - deletions] + calculateEncodedLength(count)
          );
        }
      }

      if (j > 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[n][k];

  function calculateEncodedLength(count) {
    if (count === 0) return 0;
    if (count === 1) return 1;
    if (count < 10) return 2;
    if (count < 100) return 3;
    return 4;
  }
};
