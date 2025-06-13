/**
 * 311. Sparse Matrix Multiplication
 * https://leetcode.com/problems/sparse-matrix-multiplication/
 * Difficulty: Medium
 *
 * Given two sparse matrices mat1 of size m x k and mat2 of size k x n, return the result of
 * mat1 x mat2. You may assume that multiplication is always possible.
 */

/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
var multiply = function(mat1, mat2) {
  const m = mat1.length;
  const k = mat1[0].length;
  const n = mat2[0].length;
  const result = new Array(m).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < k; j++) {
      if (mat1[i][j] !== 0) {
        for (let l = 0; l < n; l++) {
          if (mat2[j][l] !== 0) {
            result[i][l] += mat1[i][j] * mat2[j][l];
          }
        }
      }
    }
  }

  return result;
};
