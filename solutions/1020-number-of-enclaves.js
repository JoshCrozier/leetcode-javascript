/**
 * 1020. Number of Enclaves
 * https://leetcode.com/problems/number-of-enclaves/
 * Difficulty: Medium
 *
 * You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents
 * a land cell.
 *
 * A move consists of walking from one land cell to another adjacent (4-directionally) land cell
 * or walking off the boundary of the grid.
 *
 * Return the number of land cells in grid for which we cannot walk off the boundary of the grid
 * in any number of moves.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    exploreBoundary(i, 0);
    exploreBoundary(i, cols - 1);
  }

  for (let j = 0; j < cols; j++) {
    exploreBoundary(0, j);
    exploreBoundary(rows - 1, j);
  }

  let result = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result += grid[i][j];
    }
  }

  return result;

  function exploreBoundary(row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] !== 1) return;
    grid[row][col] = 0;
    exploreBoundary(row + 1, col);
    exploreBoundary(row - 1, col);
    exploreBoundary(row, col + 1);
    exploreBoundary(row, col - 1);
  }
};
