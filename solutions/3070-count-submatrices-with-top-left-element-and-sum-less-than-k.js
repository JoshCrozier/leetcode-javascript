/**
 * 3070. Count Submatrices with Top-Left Element and Sum Less Than k
 * https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer matrix grid and an integer k.
 *
 * Return the number of submatrices that contain the top-left element of the grid, and have a sum
 * less than or equal to k.
 */

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function(grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  const prefixSum = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      prefixSum[i][j] = grid[i-1][j-1] + prefixSum[i-1][j]
        + prefixSum[i][j-1] - prefixSum[i-1][j-1];
    }
  }

  let result = 0;
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (prefixSum[i][j] <= k) {
        result++;
      }
    }
  }

  return result;
};
