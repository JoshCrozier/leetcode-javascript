/**
 * 994. Rotting Oranges
 * https://leetcode.com/problems/rotting-oranges/
 * Difficulty: Medium
 *
 * You are given an m x n grid where each cell can have one of three values:
 * - 0 representing an empty cell,
 * - 1 representing a fresh orange, or
 * - 2 representing a rotten orange.
 *
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten
 * orange becomes rotten.
 *
 * Return the minimum number of minutes that must elapse until no cell has a
 * fresh orange. If this is impossible, return -1.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const queue = [];
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  while (queue.length) {
    const [i, j, k] = queue.shift();
    [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(p => {
      const [x, y, z] = [i + p[0], j + p[1], k + 1];
      if (x > -1 && x < grid.length && y > -1 && y < grid[0].length) {
        if (grid[x][y] === 1) {
          grid[x][y] = 2;
          count = Math.max(count, z);
          queue.push([x, y, z]);
        }
      }
    });
  }

  const isIncomplete = grid.some(row => row.some(n => n === 1));
  return isIncomplete ? -1 : count;
};
