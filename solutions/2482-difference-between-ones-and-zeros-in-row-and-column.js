/**
 * 2482. Difference Between Ones and Zeros in Row and Column
 * https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/
 * Difficulty: Medium
 *
 * You are given a 0-indexed m x n binary matrix grid.
 *
 * A 0-indexed m x n difference matrix diff is created with the following procedure:
 * - Let the number of ones in the ith row be onesRowi.
 * - Let the number of ones in the jth column be onesColj.
 * - Let the number of zeros in the ith row be zerosRowi.
 * - Let the number of zeros in the jth column be zerosColj.
 * - diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj
 *
 * Return the difference matrix diff.
 */

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
  const rows = new Array(grid.length).fill(0);
  const columns = new Array(grid[0].length).fill(0);

  grid.forEach((row, r) => row.forEach((value, c) => {
    rows[r] += value;
    columns[c] += value;
  }));

  grid.forEach((row, r) => row.forEach((value, c) => {
    grid[r][c] = 2 * rows[r] - grid.length + 2 * columns[c] - row.length;
  }));

  return grid;
};
