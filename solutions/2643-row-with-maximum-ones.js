/**
 * 2643. Row With Maximum Ones
 * https://leetcode.com/problems/row-with-maximum-ones/
 * Difficulty: Easy
 *
 * Given a m x n binary matrix mat, find the 0-indexed position of the row that contains
 * the maximum count of ones, and the number of ones in that row.
 *
 * In case there are multiple rows that have the maximum count of ones, the row with the
 * smallest row number should be selected.
 *
 * Return an array containing the index of the row, and the number of ones in it.
 */

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
  let maxOnes = 0;
  let maxRow = 0;

  for (let row = 0; row < mat.length; row++) {
    const ones = mat[row].reduce((sum, val) => sum + val, 0);
    if (ones > maxOnes) {
      maxOnes = ones;
      maxRow = row;
    }
  }

  return [maxRow, maxOnes];
};
