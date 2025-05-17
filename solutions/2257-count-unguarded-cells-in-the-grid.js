/**
 * 2257. Count Unguarded Cells in the Grid
 * https://leetcode.com/problems/count-unguarded-cells-in-the-grid/
 * Difficulty: Medium
 *
 * You are given two integers m and n representing a 0-indexed m x n grid. You are also given two
 * 2D integer arrays guards and walls where guards[i] = [rowi, coli] and walls[j] = [rowj, colj]
 * represent the positions of the ith guard and jth wall respectively.
 *
 * A guard can see every cell in the four cardinal directions (north, east, south, or west) starting
 * from their position unless obstructed by a wall or another guard. A cell is guarded if there is
 * at least one guard that can see it.
 *
 * Return the number of unoccupied cells that are not guarded.
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
  const grid = Array.from({ length: m }, () => Array(n).fill(0));

  for (const [row, col] of walls) {
    grid[row][col] = 1;
  }
  for (const [row, col] of guards) {
    grid[row][col] = 2;
  }

  for (const [row, col] of guards) {
    for (let i = row - 1; i >= 0 && grid[i][col] !== 1 && grid[i][col] !== 2; i--) {
      grid[i][col] = 3;
    }
    for (let i = row + 1; i < m && grid[i][col] !== 1 && grid[i][col] !== 2; i++) {
      grid[i][col] = 3;
    }
    for (let j = col - 1; j >= 0 && grid[row][j] !== 1 && grid[row][j] !== 2; j--) {
      grid[row][j] = 3;
    }
    for (let j = col + 1; j < n && grid[row][j] !== 1 && grid[row][j] !== 2; j++) {
      grid[row][j] = 3;
    }
  }

  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        result++;
      }
    }
  }

  return result;
};
