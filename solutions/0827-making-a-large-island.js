/**
 * 827. Making A Large Island
 * https://leetcode.com/problems/making-a-large-island/
 * Difficulty: Hard
 *
 * You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.
 *
 * Return the size of the largest island in grid after applying this operation.
 *
 * An island is a 4-directionally connected group of 1s.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
  function traverse(tile, grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length
        || grid[i][j] === 0 || grid[i][j] === tile) {
      return 0;
    }
    grid[i][j] = tile;
    return 1 + (
      traverse(tile, grid, i + 1, j)
      + traverse(tile, grid, i - 1, j)
      + traverse(tile, grid, i, j + 1)
      + traverse(tile, grid, i, j - 1)
    );
  };

  const map = new Map();
  let tile = 2;
  let result = -1;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 1) {
        const value = traverse(tile, grid, i, j);
        map.set(tile, value);
        tile += 1;
        result = Math.max(result, value);
      }
    }
  }

  map.set(0, 0);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (!grid[i][j]) {
        const seen = new Set();
        let sum = 0;
        if (i > 0) seen.add(grid[i - 1][j]);
        if (j > 0) seen.add(grid[i][j - 1]);
        if (i < grid.length - 1) seen.add(grid[i + 1][j]);
        if (j < grid.length - 1) seen.add(grid[i][j + 1]);
        seen.forEach(val => sum += map.get(val));
        result = Math.max(result, sum + 1);
      }
    }
  }

  return result;
};
