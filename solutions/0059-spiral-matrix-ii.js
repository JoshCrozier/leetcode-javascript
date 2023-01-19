/**
 * 59. Spiral Matrix II
 * https://leetcode.com/problems/spiral-matrix-ii/
 * Difficulty: Medium
 *
 * Given a positive integer n, generate an n x n matrix filled with
 * elements from 1 to n2 in spiral order.
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const result = Array.from(new Array(n), () => new Array(n).fill(0));
  let top = 0;
  let right = n - 1;
  let bottom = n - 1;
  let left = 0;

  for (let count = 0; count < (n * n);) {
    for (let i = left; i <= right; i++) {
      result[top][i] = ++count;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result[i][right] = ++count;
    }
    right--;

    for (let i = right; top <= bottom && i >= left; i--) {
      result[bottom][i] = ++count;
    }
    bottom--;

    for (let i = bottom; left <= right && i >= top; i--) {
      result[i][left] = ++count;
    }
    left++;
  }

  return result;
};
