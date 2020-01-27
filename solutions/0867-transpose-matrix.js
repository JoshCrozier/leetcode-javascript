/**
 * 867. Transpose Matrix
 * https://leetcode.com/problems/transpose-matrix/
 * Difficulty: Easy
 *
 * Given a matrix A, return the transpose of A.
 *
 * The transpose of a matrix is the matrix flipped over it's main
 * diagonal, switching the row and column indices of the matrix.
 */

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  return A[0].map((_,  i) => A.map(j => j[i]));
};
