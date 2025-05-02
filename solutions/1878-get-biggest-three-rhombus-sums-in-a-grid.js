/**
 * 1878. Get Biggest Three Rhombus Sums in a Grid
 * https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/
 * Difficulty: Medium
 *
 * You are given an m x n integer matrix grid.
 *
 * A rhombus sum is the sum of the elements that form the border of a regular rhombus shape in
 * grid. The rhombus must have the shape of a square rotated 45 degrees with each of the corners
 * centered in a grid cell. Below is an image of four valid rhombus shapes with the corresponding
 * colored cells that should be included in each rhombus sum.
 *
 * Note that the rhombus can have an area of 0, which is depicted by the purple rhombus in the
 * bottom right corner.
 *
 * Return the biggest three distinct rhombus sums in the grid in descending order. If there are
 * less than three distinct values, return all of them.
 */

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const sums = new Set();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      sums.add(grid[i][j]);
      for (let size = 1; size <= Math.min(i, rows - 1 - i, j, cols - 1 - j); size++) {
        let rhombusSum = 0;
        rhombusSum += grid[i - size][j] + grid[i + size][j] + grid[i][j - size] + grid[i][j + size];
        for (let offset = 1; offset < size; offset++) {
          rhombusSum += grid[i - size + offset][j + offset] + grid[i + size - offset][j + offset];
          rhombusSum += grid[i - size + offset][j - offset] + grid[i + size - offset][j - offset];
        }
        sums.add(rhombusSum);
      }
    }
  }

  const sortedSums = [...sums].sort((a, b) => b - a);
  return sortedSums.slice(0, Math.min(3, sortedSums.length));
};
