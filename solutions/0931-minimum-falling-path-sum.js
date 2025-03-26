/**
 * 931. Minimum Falling Path Sum
 * https://leetcode.com/problems/minimum-falling-path-sum/
 * Difficulty: Medium
 *
 * Given an n x n array of integers matrix, return the minimum sum of any falling path
 * through matrix.
 *
 * A falling path starts at any element in the first row and chooses the element in the
 * next row that is either directly below or diagonally left/right. Specifically, the
 * next element from position (row, col) will be (row + 1, col - 1), (row + 1, col),
 * or (row + 1, col + 1).
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  let previousRow = [...matrix[0]];

  for (let row = 1; row < matrix.length; row++) {
    const currentRow = new Array(matrix.length);
    for (let col = 0; col < matrix.length; col++) {
      const leftDiagonal = col > 0 ? previousRow[col - 1] : Infinity;
      const directlyAbove = previousRow[col];
      const rightDiagonal = col < matrix.length - 1 ? previousRow[col + 1] : Infinity;
      currentRow[col] = matrix[row][col] + Math.min(leftDiagonal, directlyAbove, rightDiagonal);
    }
    previousRow = currentRow;
  }

  return Math.min(...previousRow);
};
