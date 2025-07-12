/**
 * 2510. Check if There is a Path With Equal Number of 0's And 1's
 * https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/
 * Difficulty: Medium
 *
 * You are given a 0-indexed m x n binary matrix grid. You can move from a cell (row, col) to
 * any of the cells (row + 1, col) or (row, col + 1).
 *
 * Return true if there is a path from (0, 0) to (m - 1, n - 1) that visits an equal number
 * of 0's and 1's. Otherwise return false.
 */

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var isThereAPath = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const pathLength = rows + cols - 1;

  if (pathLength % 2 !== 0) return false;

  const visited = new Set();
  const startBalance = grid[0][0] === 1 ? 1 : -1;

  return dfs(0, 0, startBalance);

  function dfs(row, col, balance) {
    if (row === rows - 1 && col === cols - 1) {
      return balance === 0;
    }

    const key = `${row},${col},${balance}`;
    if (visited.has(key)) return false;
    visited.add(key);

    if (Math.abs(balance) > (rows - 1 - row) + (cols - 1 - col)) {
      return false;
    }

    let canReach = false;

    if (row + 1 < rows) {
      const nextBalance = balance + (grid[row + 1][col] === 1 ? 1 : -1);
      canReach = canReach || dfs(row + 1, col, nextBalance);
    }

    if (col + 1 < cols) {
      const nextBalance = balance + (grid[row][col + 1] === 1 ? 1 : -1);
      canReach = canReach || dfs(row, col + 1, nextBalance);
    }

    return canReach;
  }
};
