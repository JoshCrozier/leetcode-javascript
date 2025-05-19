/**
 * 2319. Check if Matrix Is X-Matrix
 * https://leetcode.com/problems/check-if-matrix-is-x-matrix/
 * Difficulty: Easy
 *
 * A square matrix is said to be an X-Matrix if both of the following conditions hold:
 * 1. All the elements in the diagonals of the matrix are non-zero.
 * 2. All other elements are 0.
 *
 * Given a 2D integer array grid of size n x n representing a square matrix, return true if grid
 * is an X-Matrix. Otherwise, return false.
 */

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
  const size = grid.length;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const isDiagonal = row === col || row + col === size - 1;
      const isNonZero = grid[row][col] !== 0;

      if (isDiagonal && !isNonZero) return false;
      if (!isDiagonal && isNonZero) return false;
    }
  }

  return true;
};
