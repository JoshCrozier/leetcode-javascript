/**
 * 2033. Minimum Operations to Make a Uni-Value Grid
 * https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/
 * Difficulty: Medium
 *
 * You are given a 2D integer grid of size m x n and an integer x. In one operation, you can add x
 * to or subtract x from any element in the grid.
 *
 * A uni-value grid is a grid where all the elements of it are equal.
 *
 * Return the minimum number of operations to make the grid uni-value. If it is not possible,
 * return -1.
 */

/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
  if (values.length === 1) return 0;
  const values = grid.flat();
  values.sort((a, b) => a - b);
  const median = values[Math.floor(values.length / 2)];
  let operations = 0;

  for (const value of values) {
    const diff = Math.abs(value - median);
    if (diff % x !== 0) return -1;
    operations += diff / x;
  }

  return operations;
};
