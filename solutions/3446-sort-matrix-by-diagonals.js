/**
 * 3446. Sort Matrix by Diagonals
 * https://leetcode.com/problems/sort-matrix-by-diagonals/
 * Difficulty: Medium
 *
 * You are given an n x n square matrix of integers grid. Return the matrix such that:
 * - The diagonals in the bottom-left triangle (including the middle diagonal) are sorted
 *   in non-increasing order.
 * - The diagonals in the top-right triangle are sorted in non-decreasing order.
 */

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
  const n = grid.length;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const key = i - j;
      if (!map.has(key)) {
        map.set(key, key < 0
          ? new PriorityQueue((a, b) => a - b)
          : new PriorityQueue((a, b) => b - a));
      }
      map.get(key).enqueue(grid[i][j]);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const key = i - j;
      grid[i][j] = map.get(key).dequeue();
    }
  }

  return grid;
};
