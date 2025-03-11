/**
 * 712. Minimum ASCII Delete Sum for Two Strings
 * https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
 * Difficulty: Medium
 *
 * Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to
 * make two strings equal.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  const dp = new Array(s1.length + 1).fill().map(() => {
    return new Array(s2.length + 1).fill(0);
  });

  for (let i = 1; i <= s1.length; i++) {
    dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
  }
  for (let j = 1; j <= s2.length; j++) {
    dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + s1.charCodeAt(i - 1),
          dp[i][j - 1] + s2.charCodeAt(j - 1)
        );
      }
    }
  }

  return dp[s1.length][s2.length];
};
