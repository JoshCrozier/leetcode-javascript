/**
 * 959. Regions Cut By Slashes
 * https://leetcode.com/problems/regions-cut-by-slashes/
 * Difficulty: Medium
 *
 * An n x n grid is composed of 1 x 1 squares where each 1 x 1 square consists of
 * a '/', '\', or blank space ' '. These characters divide the square into contiguous
 * regions.
 *
 * Given the grid grid represented as a string array, return the number of regions.
 *
 * Note that backslash characters are escaped, so a '\' is represented as '\\'.
 */

/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
  const size = grid.length * 3;
  const matrix = new Array(size).fill().map(() => new Array(size).fill(0));

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      const baseRow = row * 3;
      const baseCol = col * 3;
      if (grid[row][col] === '/') {
        matrix[baseRow][baseCol + 2] = 1;
        matrix[baseRow + 1][baseCol + 1] = 1;
        matrix[baseRow + 2][baseCol] = 1;
      } else if (grid[row][col] === '\\') {
        matrix[baseRow][baseCol] = 1;
        matrix[baseRow + 1][baseCol + 1] = 1;
        matrix[baseRow + 2][baseCol + 2] = 1;
      }
    }
  }

  let result = 0;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (matrix[row][col] === 0) {
        helper(row, col);
        result++;
      }
    }
  }

  return result;

  function helper(x, y) {
    if (x < 0 || x >= size || y < 0 || y >= size || matrix[x][y] !== 0) return;
    matrix[x][y] = 1;
    helper(x + 1, y);
    helper(x - 1, y);
    helper(x, y + 1);
    helper(x, y - 1);
  }
};
