/**
 * 1329. Sort the Matrix Diagonally
 * https://leetcode.com/problems/sort-the-matrix-diagonally/
 * Difficulty: Medium
 *
 * A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost
 * row or leftmost column and going in the bottom-right direction until reaching the matrix's
 * end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix,
 * includes cells mat[2][0], mat[3][1], and mat[4][2].
 *
 * Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return
 * the resulting matrix.
 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const diagonals = new Map();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const diagonalKey = i - j;
      if (!diagonals.has(diagonalKey)) {
        diagonals.set(diagonalKey, []);
      }
      diagonals.get(diagonalKey).push(mat[i][j]);
    }
  }

  diagonals.forEach(values => values.sort((a, b) => a - b));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const diagonalKey = i - j;
      mat[i][j] = diagonals.get(diagonalKey).shift();
    }
  }

  return mat;
};
