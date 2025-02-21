/**
 * 221. Maximal Square
 * https://leetcode.com/problems/maximal-square/
 * Difficulty: Medium
 *
 * Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only
 * 1's and return its area.
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const dp = [...new Array(matrix.length + 1)].map(() => new Array(matrix[0].length + 1).fill(0));
  let max = 0;

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        max = Math.max(max, dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1);
      }
    }
  }

  return max ** 2;
};
