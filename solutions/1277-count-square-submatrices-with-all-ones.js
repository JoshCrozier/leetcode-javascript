/**
 * 1277. Count Square Submatrices with All Ones
 * https://leetcode.com/problems/count-square-submatrices-with-all-ones/
 * Difficulty: Medium
 *
 * Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));
  let result = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
        }
        result += dp[i][j];
      }
    }
  }

  return result;
};
