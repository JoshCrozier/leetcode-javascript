/**
 * 1582. Special Positions in a Binary Matrix
 * https://leetcode.com/problems/special-positions-in-a-binary-matrix/
 * Difficulty: Easy
 *
 * Given an m x n binary matrix mat, return the number of special positions in mat.
 *
 * A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and
 * column j are 0 (rows and columns are 0-indexed).
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const rowSums = new Array(rows).fill(0);
  const colSums = new Array(cols).fill(0);
  let result = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 1) {
        rowSums[i]++;
        colSums[j]++;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 1 && rowSums[i] === 1 && colSums[j] === 1) {
        result++;
      }
    }
  }

  return result;
};
