/**
 * 750. Number Of Corner Rectangles
 * https://leetcode.com/problems/number-of-corner-rectangles/
 * Difficulty: Medium
 *
 * Given an m x n integer matrix grid where each entry is only 0 or 1, return the number of
 * corner rectangles.
 *
 * A corner rectangle is four distinct 1's on the grid that forms an axis-aligned rectangle.
 * Note that only the corners need to have the value 1. Also, all four 1's used must be distinct.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countCornerRectangles = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let result = 0;

  for (let row1 = 0; row1 < rows; row1++) {
    for (let row2 = row1 + 1; row2 < rows; row2++) {
      let sharedOnes = 0;
      for (let col = 0; col < cols; col++) {
        if (grid[row1][col] === 1 && grid[row2][col] === 1) {
          sharedOnes++;
        }
      }
      result += sharedOnes * (sharedOnes - 1) / 2;
    }
  }

  return result;
};
