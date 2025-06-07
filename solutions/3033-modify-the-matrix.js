/**
 * 3033. Modify the Matrix
 * https://leetcode.com/problems/modify-the-matrix/
 * Difficulty: Easy
 *
 * Given a 0-indexed m x n integer matrix matrix, create a new 0-indexed matrix called answer.
 * Make answer equal to matrix, then replace each element with the value -1 with the maximum
 * element in its respective column.
 *
 * Return the matrix answer.
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const result = matrix.map(row => [...row]);
  const colMaxes = new Array(n).fill(-Infinity);

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      colMaxes[j] = Math.max(colMaxes[j], matrix[i][j]);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (result[i][j] === -1) {
        result[i][j] = colMaxes[j];
      }
    }
  }

  return result;
};
