/**
 * 1572. Matrix Diagonal Sum
 * https://leetcode.com/problems/matrix-diagonal-sum/
 * Difficulty: Easy
 *
 * Given a square matrix mat, return the sum of the matrix diagonals.
 *
 * Only include the sum of all the elements on the primary diagonal and all the elements on the
 * secondary diagonal that are not part of the primary diagonal.
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  const n = mat.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += mat[i][i];
    sum += mat[i][n - 1 - i];
  }

  if (n % 2 === 1) {
    sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
  }

  return sum;
};
