/**
 * 1727. Largest Submatrix With Rearrangements
 * https://leetcode.com/problems/largest-submatrix-with-rearrangements/
 * Difficulty: Medium
 *
 * You are given a binary matrix matrix of size m x n, and you are allowed to rearrange the
 * columns of the matrix in any order.
 *
 * Return the area of the largest submatrix within matrix where every element of the submatrix
 * is 1 after reordering the columns optimally.
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let result = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row > 0 && matrix[row][col] === 1) {
        matrix[row][col] += matrix[row - 1][col];
      }
    }

    const heights = matrix[row].slice().sort((a, b) => b - a);
    for (let i = 0; i < cols; i++) {
      if (heights[i] === 0) break;
      result = Math.max(result, heights[i] * (i + 1));
    }
  }

  return result;
};
