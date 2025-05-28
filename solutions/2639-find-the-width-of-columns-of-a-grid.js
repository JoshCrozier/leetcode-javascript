/**
 * 2639. Find the Width of Columns of a Grid
 * https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/
 * Difficulty: Easy
 *
 * You are given a 0-indexed m x n integer matrix grid. The width of a column is the
 * maximum length of its integers.
 * - For example, if grid = [[-10], [3], [12]], the width of the only column is 3
 *   since -10 is of length 3.
 *
 * Return an integer array ans of size n where ans[i] is the width of the ith column.
 *
 * The length of an integer x with len digits is equal to len if x is non-negative, and
 * len + 1 otherwise.
 */

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const result = new Array(cols).fill(0);

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const num = grid[row][col];
      result[col] = Math.max(result[col], String(num).length);
    }
  }

  return result;
};
