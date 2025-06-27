/**
 * 1062. Longest Repeating Substring
 * https://leetcode.com/problems/longest-repeating-substring/
 * Difficulty: Medium
 *
 * Given a string s, return the length of the longest repeating substrings. If no repeating
 * substring exists, return 0.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestRepeatingSubstring = function(s) {
  const n = s.length;
  const dp = new Array(n + 1).fill(null).map(() => new Array(n + 1).fill(0));
  let result = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i !== j && s[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        result = Math.max(result, dp[i][j]);
      }
    }
  }

  return result;
};
