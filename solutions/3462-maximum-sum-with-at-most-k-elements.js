/**
 * 3462. Maximum Sum With at Most K Elements
 * https://leetcode.com/problems/maximum-sum-with-at-most-k-elements/
 * Difficulty: Medium
 *
 * You are given a 2D integer matrix grid of size n x m, an integer array limits of length n, and
 * an integer k. The task is to find the maximum sum of at most k elements from the matrix grid
 * such that:
 * - The number of elements taken from the ith row of grid does not exceed limits[i].
 *
 * Return the maximum sum.
 */

/**
 * @param {number[][]} grid
 * @param {number[]} limits
 * @param {number} k
 * @return {number}
 */
var maxSum = function(grid, limits, k) {
  const result = [];
  grid.forEach((row, i) => {
    result.push(...row.slice().sort((a, b) => b - a).slice(0, limits[i]));
  });
  return result.sort((a, b) => b - a).slice(0, k).reduce((sum, num) => sum + num, 0);
};
