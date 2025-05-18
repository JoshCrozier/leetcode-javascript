/**
 * 2304. Minimum Path Cost in a Grid
 * https://leetcode.com/problems/minimum-path-cost-in-a-grid/
 * Difficulty: Medium
 *
 * You are given a 0-indexed m x n integer matrix grid consisting of distinct integers from
 * 0 to m * n - 1. You can move in this matrix from a cell to any other cell in the next row.
 * That is, if you are in cell (x, y) such that x < m - 1, you can move to any of the cells
 * (x + 1, 0), (x + 1, 1), ..., (x + 1, n - 1). Note that it is not possible to move from
 * cells in the last row.
 *
 * Each possible move has a cost given by a 0-indexed 2D array moveCost of size (m * n) x n,
 * where moveCost[i][j] is the cost of moving from a cell with value i to a cell in column j
 * of the next row. The cost of moving from cells in the last row of grid can be ignored.
 *
 * The cost of a path in grid is the sum of all values of cells visited plus the sum of costs
 * of all the moves made. Return the minimum cost of a path that starts from any cell in the
 * first row and ends at any cell in the last row.
 */

/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
var minPathCost = function(grid, moveCost) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({ length: m }, () => new Array(n).fill(Infinity));

  for (let j = 0; j < n; j++) {
    dp[0][j] = grid[0][j];
  }

  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n; j++) {
      const value = grid[i][j];
      for (let k = 0; k < n; k++) {
        dp[i + 1][k] = Math.min(
          dp[i + 1][k],
          dp[i][j] + grid[i + 1][k] + moveCost[value][k]
        );
      }
    }
  }

  return Math.min(...dp[m - 1]);
};
