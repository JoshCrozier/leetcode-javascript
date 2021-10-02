/**
 * 1351. Count Negative Numbers in a Sorted Matrix
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 * Difficulty: Easy
 *
 * Given a m x n matrix grid which is sorted in non-increasing order both
 * row-wise and column-wise, return the number of negative numbers in grid.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  return grid.reduce((count, row) => {
    while (row.pop() < 0) {
      count++;
    }
    return count;
  }, 0);
};
