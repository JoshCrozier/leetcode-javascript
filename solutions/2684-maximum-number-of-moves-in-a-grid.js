/**
 * 2684. Maximum Number of Moves in a Grid
 * https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/
 * Difficulty: Medium
 *
 * You are given a 0-indexed m x n matrix grid consisting of positive integers.
 *
 * You can start at any cell in the first column of the matrix, and traverse the grid in the
 * following way:
 * - From a cell (row, col), you can move to any of the cells: (row - 1, col + 1), (row, col + 1)
 *   and (row + 1, col + 1) such that the value of the cell you move to, should be strictly bigger
 *   than the value of the current cell.
 *
 * Return the maximum number of moves that you can perform.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const memo = Array.from({ length: rows }, () => new Array(cols).fill(-1));

  let result = 0;
  for (let row = 0; row < rows; row++) {
    result = Math.max(result, explore(row, 0));
  }

  return result;

  function explore(row, col) {
    if (col === cols - 1) return 0;
    if (memo[row][col] !== -1) return memo[row][col];

    let maxSteps = 0;
    const current = grid[row][col];

    if (row > 0 && col + 1 < cols && grid[row - 1][col + 1] > current) {
      maxSteps = Math.max(maxSteps, 1 + explore(row - 1, col + 1));
    }
    if (col + 1 < cols && grid[row][col + 1] > current) {
      maxSteps = Math.max(maxSteps, 1 + explore(row, col + 1));
    }
    if (row + 1 < rows && col + 1 < cols && grid[row + 1][col + 1] > current) {
      maxSteps = Math.max(maxSteps, 1 + explore(row + 1, col + 1));
    }

    memo[row][col] = maxSteps;
    return maxSteps;
  }
};
