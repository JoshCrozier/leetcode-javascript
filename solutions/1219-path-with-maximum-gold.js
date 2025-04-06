/**
 * 1219. Path with Maximum Gold
 * https://leetcode.com/problems/path-with-maximum-gold/
 * Difficulty: Medium
 *
 * In a gold mine grid of size m x n, each cell in this mine has an integer representing the
 * amount of gold in that cell, 0 if it is empty.
 *
 * Return the maximum amount of gold you can collect under the conditions:
 * - Every time you are located in a cell you will collect all the gold in that cell.
 * - From your position, you can walk one step to the left, right, up, or down.
 * - You can't visit the same cell more than once.
 * - Never visit a cell with 0 gold.
 * - You can start and stop collecting gold from any position in the grid that has some gold.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let maxGold = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] !== 0) {
        exploreGold(i, j, 0);
      }
    }
  }

  return maxGold;

  function exploreGold(row, col, currentGold) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 0) {
      maxGold = Math.max(maxGold, currentGold);
      return;
    }

    const goldHere = grid[row][col];
    grid[row][col] = 0;

    exploreGold(row - 1, col, currentGold + goldHere);
    exploreGold(row + 1, col, currentGold + goldHere);
    exploreGold(row, col - 1, currentGold + goldHere);
    exploreGold(row, col + 1, currentGold + goldHere);

    grid[row][col] = goldHere;
  }
};
