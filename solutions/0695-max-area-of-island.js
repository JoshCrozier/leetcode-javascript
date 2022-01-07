/**
 * 695. Max Area of Island
 * https://leetcode.com/problems/max-area-of-island/
 * Difficulty: Medium
 *
 * You are given an m x n binary matrix grid. An island is a group of 1's (representing land)
 * connected 4-directionally (horizontal or vertical.) You may assume all four edges of the
 * grid are surrounded by water.
 *
 * The area of an island is the number of cells with a value 1 in the island.
 *
 * Return the maximum area of an island in grid. If there is no island, return 0.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const cache = new Set();
  let max = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      max = Math.max(max, traverse(grid, cache, i, j));
    }
  }

  return max;
};

function traverse(grid, cache, x, y) {
  let count = 0;
  if (grid[x] && grid[x][y] === 1 && !cache.has(`${x},${y}`)) {
    cache.add(`${x},${y}`);
    count += [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]
      .map(([x, y]) => traverse(grid, cache, x, y))
      .reduce((sum, count) => sum + count, 0) + 1;
  }
  return count;
}
