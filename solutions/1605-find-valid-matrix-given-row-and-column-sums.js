/**
 * 1605. Find Valid Matrix Given Row and Column Sums
 * https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/
 * Difficulty: Medium
 *
 * You are given two arrays rowSum and colSum of non-negative integers where rowSum[i] is the sum
 * of the elements in the ith row and colSum[j] is the sum of the elements of the jth column of a
 * 2D matrix. In other words, you do not know the elements of the matrix, but you do know the sums
 * of each row and column.
 *
 * Find any matrix of non-negative integers of size rowSum.length x colSum.length that satisfies
 * the rowSum and colSum requirements.
 *
 * Return a 2D array representing any matrix that fulfills the requirements. It's guaranteed that
 * at least one matrix that fulfills the requirements exists.
 */

/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
  const rows = rowSum.length;
  const cols = colSum.length;
  const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const value = Math.min(rowSum[i], colSum[j]);
      matrix[i][j] = value;
      rowSum[i] -= value;
      colSum[j] -= value;
    }
  }

  return matrix;
};
