/**
 * 1504. Count Submatrices With All Ones
 * https://leetcode.com/problems/count-submatrices-with-all-ones/
 * Difficulty: Medium
 *
 * Given an m x n binary matrix mat, return the number of submatrices that have all ones.
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const heights = new Array(cols).fill(0);
  let result = 0;

  for (let i = 0; i < rows; i++) {
    const stack = [];
    for (let j = 0; j < cols; j++) {
      heights[j] = mat[i][j] === 1 ? heights[j] + 1 : 0;

      while (stack.length && heights[j] <= heights[stack[stack.length - 1]]) {
        stack.pop();
      }

      stack.push(j);

      for (let k = 0; k < stack.length; k++) {
        const height = heights[stack[k]];
        const width = k === 0 ? stack[k] + 1 : stack[k] - stack[k - 1];
        result += height * width;
      }
    }
  }

  return result;
};
