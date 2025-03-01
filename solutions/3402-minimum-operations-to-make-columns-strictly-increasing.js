/**
 * 3402. Minimum Operations to Make Columns Strictly Increasing
 * https://leetcode.com/problems/minimum-operations-to-make-columns-strictly-increasing/
 * Difficulty: Easy
 *
 * You are given a m x n matrix grid consisting of non-negative integers.
 *
 * In one operation, you can increment the value of any grid[i][j] by 1.
 *
 * Return the minimum number of operations needed to make all columns of grid strictly increasing.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function(grid) {
  let count = 0;

  for (let i = 1; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const [previous, current] = [grid[i - 1][j], grid[i][j]];
      if (current <= previous) {
        const operations = previous - current + 1;
        grid[i][j] = operations + current;
        count += operations;
      }
    }
  }

  return count;
};
