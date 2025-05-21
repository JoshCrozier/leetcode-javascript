/**
 * 2373. Largest Local Values in a Matrix
 * https://leetcode.com/problems/largest-local-values-in-a-matrix/
 * Difficulty: Easy
 *
 * You are given an n x n integer matrix grid.
 *
 * Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:
 * - maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around
 *   row i + 1 and column j + 1.
 *
 * In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.
 *
 * Return the generated matrix.
 */

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
  const n = grid.length;
  const result = new Array(n - 2).fill().map(() => new Array(n - 2).fill(0));

  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      let maxVal = 0;
      for (let r = i; r < i + 3; r++) {
        for (let c = j; c < j + 3; c++) {
          maxVal = Math.max(maxVal, grid[r][c]);
        }
      }
      result[i][j] = maxVal;
    }
  }

  return result;
};
