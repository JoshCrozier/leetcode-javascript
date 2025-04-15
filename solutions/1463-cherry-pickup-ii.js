/**
 * 1463. Cherry Pickup II
 * https://leetcode.com/problems/cherry-pickup-ii/
 * Difficulty: Hard
 *
 * You are given a rows x cols matrix grid representing a field of cherries where grid[i][j]
 * represents the number of cherries that you can collect from the (i, j) cell.
 *
 * You have two robots that can collect cherries for you:
 * - Robot #1 is located at the top-left corner (0, 0), and
 * - Robot #2 is located at the top-right corner (0, cols - 1).
 *
 * Return the maximum number of cherries collection using both robots by following the rules below:
 * - From a cell (i, j), robots can move to cell (i + 1, j - 1), (i + 1, j), or (i + 1, j + 1).
 * - When any robot passes through a cell, It picks up all cherries, and the cell becomes an empty
 *   cell.
 * - When both robots stay in the same cell, only one takes the cherries.
 * - Both robots cannot move outside of the grid at any moment.
 * - Both robots should reach the bottom row in grid.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const cache = new Array(rows).fill().map(() => {
    return new Array(cols).fill().map(() => new Array(cols).fill(-1));
  });

  return Math.max(0, findMaxCherries(0, 0, cols - 1));

  function findMaxCherries(row, col1, col2) {
    if (row === rows || col1 < 0 || col1 >= cols || col2 < 0 || col2 >= cols) {
      return -Infinity;
    }
    if (cache[row][col1][col2] !== -1) {
      return cache[row][col1][col2];
    }

    const cherries = col1 === col2 ? grid[row][col1] : grid[row][col1] + grid[row][col2];

    if (row === rows - 1) {
      return cherries;
    }

    let maxCherries = -Infinity;
    for (const nextCol1 of [col1 - 1, col1, col1 + 1]) {
      for (const nextCol2 of [col2 - 1, col2, col2 + 1]) {
        maxCherries = Math.max(maxCherries, findMaxCherries(row + 1, nextCol1, nextCol2));
      }
    }

    cache[row][col1][col2] = cherries + maxCherries;
    return cache[row][col1][col2];
  }
};
