/**
 * 1253. Reconstruct a 2-Row Binary Matrix
 * https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/
 * Difficulty: Medium
 *
 * Given the following details of a matrix with n columns and 2 rows:
 * - The matrix is a binary matrix, which means each element in the matrix can be 0 or 1.
 * - The sum of elements of the 0-th(upper) row is given as upper.
 * - The sum of elements of the 1-st(lower) row is given as lower.
 * - The sum of elements in the i-th column(0-indexed) is colsum[i], where colsum is given as an
 *   integer array with length n.
 *
 * Your task is to reconstruct the matrix with upper, lower and colsum.
 * Return it as a 2-D integer array.
 * If there are more than one valid solution, any of them will be accepted.
 * If no valid solution exists, return an empty 2-D array.
 */

/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
  const n = colsum.length;
  const matrix = [[], []];
  let upperLeft = upper;
  let lowerLeft = lower;

  for (let i = 0; i < n; i++) {
    if (colsum[i] === 2) {
      matrix[0][i] = 1;
      matrix[1][i] = 1;
      upperLeft--;
      lowerLeft--;
    } else {
      matrix[0][i] = 0;
      matrix[1][i] = 0;
    }
  }

  if (upperLeft < 0 || lowerLeft < 0) return [];

  for (let i = 0; i < n; i++) {
    if (colsum[i] === 1) {
      if (upperLeft > 0) {
        matrix[0][i] = 1;
        matrix[1][i] = 0;
        upperLeft--;
      } else if (lowerLeft > 0) {
        matrix[0][i] = 0;
        matrix[1][i] = 1;
        lowerLeft--;
      } else {
        return [];
      }
    }
  }

  return upperLeft === 0 && lowerLeft === 0 ? matrix : [];
};
