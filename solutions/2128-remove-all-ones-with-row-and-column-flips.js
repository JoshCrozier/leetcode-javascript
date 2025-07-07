/**
 * 2128. Remove All Ones With Row and Column Flips
 * https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/
 * Difficulty: Medium
 *
 * You are given an m x n binary matrix grid.
 *
 * In one operation, you can choose any row or column and flip each value in that row or
 * column (i.e., changing all 0's to 1's, and all 1's to 0's).
 *
 * Return true if it is possible to remove all 1's from grid using any number of operations
 * or false otherwise.
 */

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var removeOnes = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const firstRow = grid[0];

  for (let i = 1; i < rows; i++) {
    let sameAsFirst = true;
    let oppositeToFirst = true;

    for (let j = 0; j < cols; j++) {
      if (grid[i][j] !== firstRow[j]) {
        sameAsFirst = false;
      }
      if (grid[i][j] === firstRow[j]) {
        oppositeToFirst = false;
      }
    }

    if (!sameAsFirst && !oppositeToFirst) {
      return false;
    }
  }

  return true;
};
