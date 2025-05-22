/**
 * 2428. Maximum Sum of an Hourglass
 * https://leetcode.com/problems/maximum-sum-of-an-hourglass/
 * Difficulty: Medium
 *
 * You are given an m x n integer matrix grid.
 *
 * We define an hourglass as a part of the matrix with the following form.
 *
 * Return the maximum sum of the elements of an hourglass.
 *
 * Note that an hourglass cannot be rotated and must be entirely contained within the matrix.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function(grid) {
  let result = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = 0; i <= rows - 3; i++) {
    for (let j = 0; j <= cols - 3; j++) {
      const hourglassSum = grid[i][j] + grid[i][j+1] + grid[i][j+2] + grid[i+1][j+1]
        + grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2];
      result = Math.max(result, hourglassSum);
    }
  }

  return result;
};
