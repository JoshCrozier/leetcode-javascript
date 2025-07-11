/**
 * 2371. Minimize Maximum Value in a Grid
 * https://leetcode.com/problems/minimize-maximum-value-in-a-grid/
 * Difficulty: Hard
 *
 * You are given an m x n integer matrix grid containing distinct positive integers.
 *
 * You have to replace each integer in the matrix with a positive integer satisfying the
 * following conditions:
 * - The relative order of every two elements that are in the same row or column should stay
 *   the same after the replacements.
 * - The maximum number in the matrix after the replacements should be as small as possible.
 *
 * The relative order stays the same if for all pairs of elements in the original matrix such
 * that grid[r1][c1] > grid[r2][c2] where either r1 == r2 or c1 == c2, then it must be true
 * that grid[r1][c1] > grid[r2][c2] after the replacements.
 *
 * For example, if grid = [[2, 4, 5], [7, 3, 9]] then a good replacement could be either
 * grid = [[1, 2, 3], [2, 1, 4]] or grid = [[1, 2, 3], [3, 1, 4]].
 *
 * Return the resulting matrix. If there are multiple answers, return any of them.
 */

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var minScore = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const positions = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      positions.push([grid[i][j], i, j]);
    }
  }

  positions.sort((a, b) => a[0] - b[0]);

  const result = new Array(rows).fill().map(() => new Array(cols).fill(0));
  const rowMax = new Array(rows).fill(0);
  const colMax = new Array(cols).fill(0);
  for (const [value, row, col] of positions) {
    const newValue = Math.max(rowMax[row], colMax[col]) + 1;
    result[row][col] = newValue;
    rowMax[row] = newValue;
    colMax[col] = newValue;
  }

  return result;
};
