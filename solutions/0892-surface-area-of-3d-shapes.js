/**
 * 892. Surface Area of 3D Shapes
 * https://leetcode.com/problems/surface-area-of-3d-shapes/
 * Difficulty: Easy
 *
 * You are given an n x n grid where you have placed some 1 x 1 x 1 cubes. Each value
 * v = grid[i][j] represents a tower of v cubes placed on top of cell (i, j).
 *
 * After placing these cubes, you have decided to glue any directly adjacent cubes to
 * each other, forming several irregular 3D shapes.
 *
 * Return the total surface area of the resulting shapes.
 *
 * Note: The bottom face of each shape counts toward its surface area.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  let result = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      if (grid[row][col]) {
        result += 2 + 4 * grid[row][col];

        result -= row > 0 ? Math.min(grid[row][col], grid[row - 1][col]) * 2 : 0;
        result -= col > 0 ? Math.min(grid[row][col], grid[row][col - 1]) * 2 : 0;
      }
    }
  }

  return result;
};
