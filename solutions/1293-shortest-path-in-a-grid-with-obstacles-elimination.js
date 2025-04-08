/**
 * 1293. Shortest Path in a Grid with Obstacles Elimination
 * https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/
 * Difficulty: Hard
 *
 * You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle).
 * You can move up, down, left, or right from and to an empty cell in one step.
 *
 * Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right
 * corner (m - 1, n - 1) given that you can eliminate at most k obstacles. If it is not possible to
 * find such walk return -1.
 */

function shortestPath(grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  if (rows === 1 && cols === 1) return 0;

  let steps = 1;
  let queue = [[0, 0, k]];
  const visited = Array.from({ length: rows }, () => new Int16Array(cols).fill(-1));
  const directions = [0, -1, 0, 1, 0];

  while (queue.length) {
    const nextLevel = [];
    for (const [row, col, obstaclesLeft] of queue) {
      for (let i = 0; i < 4; i++) {
        const newRow = row + directions[i];
        const newCol = col + directions[i + 1];

        if (newRow < 0 || newRow === rows || newCol < 0
            || newCol === cols || visited[newRow][newCol] >= obstaclesLeft) continue;

        if (newRow === rows - 1 && newCol === cols - 1) return steps;

        const remainingObstacles = grid[newRow][newCol] ? obstaclesLeft - 1 : obstaclesLeft;
        visited[newRow][newCol] = remainingObstacles;
        nextLevel.push([newRow, newCol, remainingObstacles]);
      }
    }
    steps++;
    queue = nextLevel;
  }

  return -1;
}
