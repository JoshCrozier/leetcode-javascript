/**
 * 1594. Maximum Non Negative Product in a Matrix
 * https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/
 * Difficulty: Medium
 *
 * You are given a m x n matrix grid. Initially, you are located at the top-left corner (0, 0),
 * and in each step, you can only move right or down in the matrix.
 *
 * Among all possible paths starting from the top-left corner (0, 0) and ending in the bottom-right
 * corner (m - 1, n - 1), find the path with the maximum non-negative product. The product of a
 * path is the product of all integers in the grid cells visited along the path.
 *
 * Return the maximum non-negative product modulo 109 + 7. If the maximum product is negative,
 * return -1.
 *
 * Notice that the modulo is performed after getting the maximum product.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => [1, 1])
  );

  dp[0][0] = [grid[0][0], grid[0][0]];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row === 0 && col === 0) continue;

      let minProduct = Infinity;
      let maxProduct = -Infinity;

      if (row > 0) {
        minProduct = Math.min(
          minProduct,
          dp[row - 1][col][0] * grid[row][col],
          dp[row - 1][col][1] * grid[row][col]
        );
        maxProduct = Math.max(
          maxProduct,
          dp[row - 1][col][0] * grid[row][col],
          dp[row - 1][col][1] * grid[row][col]
        );
      }

      if (col > 0) {
        minProduct = Math.min(
          minProduct,
          dp[row][col - 1][0] * grid[row][col],
          dp[row][col - 1][1] * grid[row][col]
        );
        maxProduct = Math.max(
          maxProduct,
          dp[row][col - 1][0] * grid[row][col],
          dp[row][col - 1][1] * grid[row][col]
        );
      }

      dp[row][col] = [minProduct, maxProduct];
    }
  }

  const maxResult = dp[rows - 1][cols - 1][1];
  return maxResult < 0 ? -1 : maxResult % (10 ** 9 + 7);
};
