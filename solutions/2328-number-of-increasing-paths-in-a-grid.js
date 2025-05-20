/**
 * 2328. Number of Increasing Paths in a Grid
 * https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/
 * Difficulty: Hard
 *
 * You are given an m x n integer matrix grid, where you can move from a cell to any adjacent
 * cell in all 4 directions.
 *
 * Return the number of strictly increasing paths in the grid such that you can start from any
 * cell and end at any cell. Since the answer may be very large, return it modulo 109 + 7.
 *
 * Two paths are considered different if they do not have exactly the same sequence of visited
 * cells.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function(grid) {
  const MOD = 1e9 + 7;
  const rows = grid.length;
  const cols = grid[0].length;
  const cache = new Array(rows).fill().map(() => new Array(cols).fill(0));
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  function explore(row, col) {
    if (cache[row][col]) return cache[row][col];

    let paths = 1;
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (
        newRow >= 0 && newRow < rows && newCol >= 0
        && newCol < cols && grid[newRow][newCol] > grid[row][col]
      ) {
        paths = (paths + explore(newRow, newCol)) % MOD;
      }
    }

    return cache[row][col] = paths;
  }

  let total = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      total = (total + explore(i, j)) % MOD;
    }
  }

  return total;
};
