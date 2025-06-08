/**
 * 3071. Minimum Operations to Write the Letter Y on a Grid
 * https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/
 * Difficulty: Medium
 *
 * You are given a 0-indexed n x n grid where n is odd, and grid[r][c] is 0, 1, or 2.
 *
 * We say that a cell belongs to the Letter Y if it belongs to one of the following:
 * - The diagonal starting at the top-left cell and ending at the center cell of the grid.
 * - The diagonal starting at the top-right cell and ending at the center cell of the grid.
 * - The vertical line starting at the center cell and ending at the bottom border of the grid.
 *
 * The Letter Y is written on the grid if and only if:
 * - All values at cells belonging to the Y are equal.
 * - All values at cells not belonging to the Y are equal.
 * - The values at cells belonging to the Y are different from the values at cells not belonging
 *   to the Y.
 *
 * Return the minimum number of operations needed to write the letter Y on the grid given that
 * in one operation you can change the value at any cell to 0, 1, or 2.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperationsToWriteY = function(grid) {
  const n = grid.length;
  const center = Math.floor(n / 2);
  const yCells = [];
  const nonYCells = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((i === j && i <= center) || (i === n - 1 - j && i <= center)
          || (j === center && i >= center)) {
        yCells.push(grid[i][j]);
      } else {
        nonYCells.push(grid[i][j]);
      }
    }
  }

  const yCounts = [0, 0, 0];
  const nonYCounts = [0, 0, 0];

  for (const val of yCells) yCounts[val]++;
  for (const val of nonYCells) nonYCounts[val]++;

  let minOperations = Infinity;

  for (let yVal = 0; yVal <= 2; yVal++) {
    for (let nonYVal = 0; nonYVal <= 2; nonYVal++) {
      if (yVal !== nonYVal) {
        const yOps = yCells.length - yCounts[yVal];
        const nonYOps = nonYCells.length - nonYCounts[nonYVal];
        minOperations = Math.min(minOperations, yOps + nonYOps);
      }
    }
  }

  return minOperations;
};
