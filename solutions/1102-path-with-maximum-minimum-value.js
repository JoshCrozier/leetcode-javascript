/**
 * 1102. Path With Maximum Minimum Value
 * https://leetcode.com/problems/path-with-maximum-minimum-value/
 * Difficulty: Medium
 *
 * Given an m x n integer matrix grid, return the maximum score of a path starting
 * at (0, 0) and ending at (m - 1, n - 1) moving in the 4 cardinal directions.
 *
 * The score of a path is the minimum value in that path.
 * - For example, the score of the path 8 → 4 → 5 → 9 is 4.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumMinimumPath = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));

  const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);
  maxHeap.enqueue([grid[0][0], 0, 0]);
  visited[0][0] = true;

  while (!maxHeap.isEmpty()) {
    const [currentScore, row, col] = maxHeap.dequeue();

    if (row === m - 1 && col === n - 1) {
      return currentScore;
    }

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && !visited[newRow][newCol]) {
        visited[newRow][newCol] = true;
        const newScore = Math.min(currentScore, grid[newRow][newCol]);
        maxHeap.enqueue([newScore, newRow, newCol]);
      }
    }
  }

  return -1;
};
