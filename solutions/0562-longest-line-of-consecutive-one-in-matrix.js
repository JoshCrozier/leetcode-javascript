/**
 * 562. Longest Line of Consecutive One in Matrix
 * https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/
 * Difficulty: Medium
 *
 * Given an m x n binary matrix mat, return the length of the longest line of consecutive one
 * in the matrix.
 *
 * The line could be horizontal, vertical, diagonal, or anti-diagonal.
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var longestLine = function(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const dp = new Array(rows).fill().map(() => new Array(cols).fill().map(() => [0, 0, 0, 0]));
  let maxLength = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 1) {
        dp[i][j][0] = j > 0 ? dp[i][j - 1][0] + 1 : 1;
        dp[i][j][1] = i > 0 ? dp[i - 1][j][1] + 1 : 1;
        dp[i][j][2] = (i > 0 && j > 0) ? dp[i - 1][j - 1][2] + 1 : 1;
        dp[i][j][3] = (i > 0 && j < cols - 1) ? dp[i - 1][j + 1][3] + 1 : 1;
        maxLength = Math.max(maxLength, ...dp[i][j]);
      }
    }
  }

  return maxLength;
};
