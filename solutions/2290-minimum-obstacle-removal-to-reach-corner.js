/**
 * 2290. Minimum Obstacle Removal to Reach Corner
 * https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/
 * Difficulty: Hard
 *
 * You are given a 0-indexed 2D integer array grid of size m x n. Each cell has one of two values:
 * - 0 represents an empty cell,
 * - 1 represents an obstacle that may be removed.
 *
 * You can move up, down, left, or right from and to an empty cell.
 *
 * Return the minimum number of obstacles to remove so you can move from the upper left corner
 * (0, 0) to the lower right corner (m - 1, n - 1).
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const dp = new Array(rows).fill().map(() => new Array(cols).fill(Number.MAX_SAFE_INTEGER));
  const queue = [[0, 0, 0]];
  let result = rows * cols + 1;

  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let l = 0; l < levelSize; l++) {
      const [i, j, cost] = queue.shift();

      if (i === rows - 1 && j === cols - 1) {
        result = Math.min(result, cost);
        continue;
      }

      if (cost > dp[i][j]) {
        continue;
      }

      for (const [dx, dy] of directions) {
        const newI = i + dx;
        const newJ = j + dy;

        if (isValid(newI, newJ, cost)) {
          queue.push([newI, newJ, dp[newI][newJ]]);
        }
      }
    }
  }

  return result;

  function isValid(i, j, cost) {
    const valid = i >= 0 && j >= 0 && i < rows && j < cols && dp[i][j] > cost + grid[i][j];
    if (valid) dp[i][j] = cost + grid[i][j];
    return valid;
  }
};
