/**
 * 2579. Count Total Number of Colored Cells
 * https://leetcode.com/problems/count-total-number-of-colored-cells/
 * Difficulty: Medium
 *
 * There exists an infinitely large two-dimensional grid of uncolored unit cells.
 * You are given a positive integer n, indicating that you must do the following
 * routine for n minutes:
 * - At the first minute, color any arbitrary unit cell blue.
 * - Every minute thereafter, color blue every uncolored cell that touches a blue cell.
 *
 * Below is a pictorial representation of the state of the grid after minutes 1, 2, and 3.
 */

/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
  return 1 + 2 * n * (n - 1);
};
