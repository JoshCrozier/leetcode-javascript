/**
 * 54. Spiral Matrix
 * https://leetcode.com/problems/spiral-matrix/
 * Difficulty: Medium
 *
 * Given an `m x n` `matrix`, return all elements of the `matrix` in spiral order.
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const output = [];
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;

  while (output.length < matrix.length * matrix[0].length) {
    for (let i = left; i <= right; i++) {
      output.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      output.push(matrix[i][right]);
    }
    right--;

    for (let i = right; top <= bottom && i >= left; i--) {
      output.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; left <= right && i >= top; i--) {
      output.push(matrix[i][left]);
    }
    left++;
  }

  return output;
};
