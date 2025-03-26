/**
 * 934. Shortest Bridge
 * https://leetcode.com/problems/shortest-bridge/
 * Difficulty: Medium
 *
 * You are given an n x n binary matrix grid where 1 represents land and 0 represents water.
 *
 * An island is a 4-directionally connected group of 1's not connected to any other 1's.
 * There are exactly two islands in grid.
 *
 * You may change 0's to 1's to connect the two islands to form one island.
 *
 * Return the smallest number of 0's you must flip to connect the two islands.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
  const n = grid.length;
  const queue = [];
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  outer: for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        findFirstIsland(i, j);
        break outer;
      }
    }
  }

  let distance = 0;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift();
      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;
        if (newRow < 0 || newRow >= n || newCol < 0 || newCol >= n
            || grid[newRow][newCol] === 2) continue;
        if (grid[newRow][newCol] === 1) return distance;
        grid[newRow][newCol] = 2;
        queue.push([newRow, newCol]);
      }
    }
    distance++;
  }

  return distance;

  function findFirstIsland(row, col) {
    if (row < 0 || row >= n || col < 0 || col >= n || grid[row][col] !== 1) return;
    grid[row][col] = 2;
    queue.push([row, col]);
    for (const [dx, dy] of directions) {
      findFirstIsland(row + dx, col + dy);
    }
  }
};
