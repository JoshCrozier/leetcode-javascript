/**
 * 1260. Shift 2D Grid
 * https://leetcode.com/problems/shift-2d-grid/
 * Difficulty: Easy
 *
 * Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
 *
 * In one shift operation:
 * - Element at grid[i][j] moves to grid[i][j + 1].
 * - Element at grid[i][n - 1] moves to grid[i + 1][0].
 * - Element at grid[m - 1][n - 1] moves to grid[0][0].
 *
 * Return the 2D grid after applying shift operation k times.
 */

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  const total = rows * cols;

  if (k === 0 || k % total === 0) return grid;

  const effectiveShifts = k % total;
  const flat = grid.flat();
  const shifted = [...flat.slice(-effectiveShifts), ...flat.slice(0, -effectiveShifts)];
  const result = [];
  for (let i = 0; i < rows; i++) {
    result.push(shifted.slice(i * cols, (i + 1) * cols));
  }

  return result;
};
