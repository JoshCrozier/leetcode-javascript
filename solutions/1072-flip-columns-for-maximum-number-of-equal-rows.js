/**
 * 1072. Flip Columns For Maximum Number of Equal Rows
 * https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/
 * Difficulty: Medium
 *
 * You are given an m x n binary matrix matrix.
 *
 * You can choose any number of columns in the matrix and flip every cell in that column
 * (i.e., Change the value of the cell from 0 to 1 or vice versa).
 *
 * Return the maximum number of rows that have all values equal after some number of flips.
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
  const rowPatterns = new Map();
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    let pattern = '';
    let flippedPattern = '';
    for (let j = 0; j < cols; j++) {
      pattern += matrix[i][j];
      flippedPattern += 1 - matrix[i][j];
    }
    rowPatterns.set(pattern, (rowPatterns.get(pattern) || 0) + 1);
    rowPatterns.set(flippedPattern, (rowPatterns.get(flippedPattern) || 0) + 1);
  }

  let result = 0;
  for (const count of rowPatterns.values()) {
    result = Math.max(result, count);
  }

  return result;
};
