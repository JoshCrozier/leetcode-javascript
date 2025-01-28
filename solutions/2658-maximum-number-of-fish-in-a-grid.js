/**
 * 2658. Maximum Number of Fish in a Grid
 * https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/
 * Difficulty: Medium
 *
 * You are given a 0-indexed 2D matrix grid of size m x n, where (r, c) represents:
 * - A land cell if grid[r][c] = 0, or
 * - A water cell containing grid[r][c] fish, if grid[r][c] > 0.
 *
 * A fisher can start at any water cell (r, c) and can do the following operations
 * any number of times:
 * - Catch all the fish at cell (r, c), or
 * - Move to any adjacent water cell.
 *
 * Return the maximum number of fish the fisher can catch if he chooses his starting
 * cell optimally, or 0 if no water cell exists.
 *
 * An adjacent cell of the cell (r, c), is one of the cells (r, c + 1), (r, c - 1),
 * (r + 1, c) or (r - 1, c) if it exists.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
  function traverse(i, j) {
    if (i >= grid.length || i < 0 || j >= grid[i].length || j < 0 || grid[i][j] === 0) {
      return 0;
    }
    let count = grid[i][j];
    grid[i][j] = 0;

    count += traverse(i + 1, j);
    count += traverse(i, j + 1);
    count += traverse(i - 1, j);
    count += traverse(i, j - 1);

    return count;
  }

  return grid.reduce((result, r, i) => {
    return r.reduce((result, c, j) => r[j] > 0 ? Math.max(result, traverse(i, j)) : result, result);
  }, 0);
};
