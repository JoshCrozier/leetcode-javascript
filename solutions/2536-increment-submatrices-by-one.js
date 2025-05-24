/**
 * 2536. Increment Submatrices by One
 * https://leetcode.com/problems/increment-submatrices-by-one/
 * Difficulty: Medium
 *
 * You are given a positive integer n, indicating that we initially have an n x n 0-indexed integer
 * matrix mat filled with zeroes.
 *
 * You are also given a 2D integer array query. For each query[i] = [row1i, col1i, row2i, col2i],
 * you should do the following operation:
 * - Add 1 to every element in the submatrix with the top left corner (row1i, col1i) and the bottom
 *   right corner (row2i, col2i). That is, add 1 to mat[x][y] for all row1i <= x <= row2i and
 *   col1i <= y <= col2i.
 *
 * Return the matrix mat after performing every query.
 */

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
  const matrix = new Array(n).fill().map(() => new Array(n).fill(0));

  for (const [row1, col1, row2, col2] of queries) {
    matrix[row1][col1]++;
    if (row2 + 1 < n) matrix[row2 + 1][col1]--;
    if (col2 + 1 < n) matrix[row1][col2 + 1]--;
    if (row2 + 1 < n && col2 + 1 < n) matrix[row2 + 1][col2 + 1]++;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] += matrix[i][j - 1];
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] += matrix[i - 1][j];
    }
  }

  return matrix;
};
