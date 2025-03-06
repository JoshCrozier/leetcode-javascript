/**
 * 583. Delete Operation for Two Strings
 * https://leetcode.com/problems/delete-operation-for-two-strings/
 * Difficulty: Medium
 *
 * Given two strings word1 and word2, return the minimum number of steps required to
 * make word1 and word2 the same.
 *
 * In one step, you can delete exactly one character in either string.
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const dp = new Array(word1.length + 1).fill().map(() => {
    return new Array(word2.length + 1).fill(0);
  });

  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      dp[i][j] = word1[i - 1] === word2[j - 1]
        ? dp[i - 1][j - 1]
        : Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
    }
  }

  return dp[word1.length][word2.length];
};
