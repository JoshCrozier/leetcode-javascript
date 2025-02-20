/**
 * 240. Search a 2D Matrix II
 * https://leetcode.com/problems/search-a-2d-matrix-ii/
 * Difficulty: Medium
 *
 * Write an efficient algorithm that searches for a value target in an m x n integer matrix
 * matrix. This matrix has the following properties:
 * - Integers in each row are sorted in ascending from left to right.
 * - Integers in each column are sorted in ascending from top to bottom.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  for (let i = 0, j = matrix[0].length - 1; i < matrix.length && j >= 0;) {
    if (matrix[i][j] === target) {
      return true;
    }
    matrix[i][j] > target ? j-- : i++;
  }
  return false;
};
