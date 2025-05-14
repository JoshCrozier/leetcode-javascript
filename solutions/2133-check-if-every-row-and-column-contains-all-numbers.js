/**
 * 2133. Check if Every Row and Column Contains All Numbers
 * https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/
 * Difficulty: Easy
 *
 * An n x n matrix is valid if every row and every column contains all the integers from 1
 * to n (inclusive).
 *
 * Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise,
 * return false.
 */

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    const rowSet = new Set();
    const colSet = new Set();

    for (let j = 0; j < n; j++) {
      rowSet.add(matrix[i][j]);
      colSet.add(matrix[j][i]);
    }

    if (rowSet.size !== n || colSet.size !== n) return false;
  }

  return true;
};
