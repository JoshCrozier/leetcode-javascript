/**
 * 1886. Determine Whether Matrix Can Be Obtained By Rotation
 * https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/
 * Difficulty: Easy
 *
 * Given two n x n binary matrices mat and target, return true if it is possible to make mat
 * equal to target by rotating mat in 90-degree increments, or false otherwise.
 */

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
  const goal = JSON.stringify(target);
  for (let i = 0; i < 4; i++) {
    if (JSON.stringify(rotate(mat)) === goal) {
      return true;
    }
  }
  return false;
};

function rotate(matrix) {
  matrix = matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix;
}
