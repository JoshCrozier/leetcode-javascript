/**
 * 1905. Count Sub Islands
 * https://leetcode.com/problems/count-sub-islands/
 * Difficulty: Medium
 *
 * You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water)
 * and 1's (representing land). An island is a group of 1's connected 4-directionally (horizontal
 * or vertical). Any cells outside of the grid are considered water cells.
 *
 * An island in grid2 is considered a sub-island if there is an island in grid1 that contains all
 * the cells that make up this island in grid2.
 *
 * Return the number of islands in grid2 that are considered sub-islands.
 */

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
  const rows = grid1.length;
  const cols = grid1[0].length;
  let result = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid2[i][j] === 1 && isValidSubIsland(i, j)) {
        result++;
      }
    }
  }

  return result;

  function isValidSubIsland(row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid2[row][col] === 0) {
      return true;
    }

    grid2[row][col] = 0;
    let isSubIsland = grid1[row][col] === 1;

    isSubIsland &= isValidSubIsland(row - 1, col);
    isSubIsland &= isValidSubIsland(row + 1, col);
    isSubIsland &= isValidSubIsland(row, col - 1);
    isSubIsland &= isValidSubIsland(row, col + 1);

    return isSubIsland;
  }
};
