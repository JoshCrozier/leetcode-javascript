/**
 * 463. Island Perimeter
 * https://leetcode.com/problems/island-perimeter/
 * Difficulty: Medium
 *
 * You are given row x col grid representing a map where grid[i][j] = 1 represents land and
 * grid[i][j] = 0 represents water.
 *
 * Grid cells are connected horizontally/vertically (not diagonally). The grid is completely
 * surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
 *
 * The island doesn't have "lakes", meaning the water inside isn't connected to the water around
 * the island. One cell is a square with side length 1. The grid is rectangular, width and height
 * don't exceed 100. Determine the perimeter of the island.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let island = 0;
  let adjacent = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        island++;
        if (i + 1 < grid.length && grid[i + 1][j] === 1) adjacent++;
        if (j + 1 < grid[0].length && grid[i][j + 1] === 1) adjacent++;
      }
    }
  }

  return island * 4 - adjacent * 2;
};
