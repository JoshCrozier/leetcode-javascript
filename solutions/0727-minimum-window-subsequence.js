/**
 * 727. Minimum Window Subsequence
 * https://leetcode.com/problems/minimum-window-subsequence/
 * Difficulty: Hard
 *
 * Given strings s1 and s2, return the minimum contiguous substring part of s1, so that
 * s2 is a subsequence of the part.
 *
 * If there is no such window in s1 that covers all characters in s2, return the empty
 * string "". If there are multiple such minimum-length windows, return the one with the
 * left-most starting index.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var minWindow = function(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(Infinity));
  dp[0][0] = 0;

  for (let j = 1; j <= n; j++) {
    dp[0][j] = 0;
    for (let i = 1; i <= m; i++) {
      if (s1[j - 1] === s2[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = dp[i][j - 1] !== Infinity ? dp[i][j - 1] + 1 : Infinity;
      }
    }
  }

  let minLength = Infinity;
  let endIndex = -1;
  for (let j = 1; j <= n; j++) {
    if (dp[m][j] < minLength) {
      minLength = dp[m][j];
      endIndex = j;
    }
  }

  return minLength === Infinity ? '' : s1.slice(endIndex - minLength, endIndex);
};
