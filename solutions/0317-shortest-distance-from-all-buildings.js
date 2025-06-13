/**
 * 317. Shortest Distance from All Buildings
 * https://leetcode.com/problems/shortest-distance-from-all-buildings/
 * Difficulty: Hard
 *
 * You are given an m x n grid grid of values 0, 1, or 2, where:
 * - each 0 marks an empty land that you can pass by freely,
 * - each 1 marks a building that you cannot pass through, and
 * - each 2 marks an obstacle that you cannot pass through.
 *
 * You want to build a house on an empty land that reaches all buildings in the shortest total
 * travel distance. You can only move up, down, left, and right.
 *
 * Return the shortest travel distance for such a house. If it is not possible to build such
 * a house according to the above rules, return -1.
 *
 * The total travel distance is the sum of the distances between the houses of the friends and
 * the meeting point.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const distances = new Array(rows).fill().map(() => new Array(cols).fill(0));
  const reachCounts = new Array(rows).fill().map(() => new Array(cols).fill(0));
  let buildingCount = 0;

  function bfs(startRow, startCol) {
    const queue = [[startRow, startCol]];
    const visited = new Array(rows).fill().map(() => new Array(cols).fill(false));
    visited[startRow][startCol] = true;
    let distance = 0;

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (queue.length) {
      const size = queue.length;
      distance++;
      for (let i = 0; i < size; i++) {
        const [row, col] = queue.shift();
        for (const [dr, dc] of directions) {
          const newRow = row + dr;
          const newCol = col + dc;
          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols
              && !visited[newRow][newCol] && grid[newRow][newCol] !== 1
              && grid[newRow][newCol] !== 2) {
            queue.push([newRow, newCol]);
            visited[newRow][newCol] = true;
            distances[newRow][newCol] += distance;
            reachCounts[newRow][newCol]++;
          }
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        buildingCount++;
        bfs(i, j);
      }
    }
  }

  let minDistance = Infinity;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 0 && reachCounts[i][j] === buildingCount) {
        minDistance = Math.min(minDistance, distances[i][j]);
      }
    }
  }

  return minDistance === Infinity ? -1 : minDistance;
};
