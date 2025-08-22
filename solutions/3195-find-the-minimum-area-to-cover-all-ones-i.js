/**
 * 3195. Find the Minimum Area to Cover All Ones I
 * https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/
 * Difficulty: Medium
 *
 * You are given a 2D binary array grid. Find a rectangle with horizontal and vertical
 * sides with the smallest area, such that all the 1's in grid lie inside this rectangle.
 *
 * Return the minimum possible area of the rectangle.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let minRow = rows;
  let maxRow = -1;
  let minCol = cols;
  let maxCol = -1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        minRow = Math.min(minRow, i);
        maxRow = Math.max(maxRow, i);
        minCol = Math.min(minCol, j);
        maxCol = Math.max(maxCol, j);
      }
    }
  }

  return (maxRow - minRow + 1) * (maxCol - minCol + 1);
};
