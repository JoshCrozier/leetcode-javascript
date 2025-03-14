/**
 * 778. Swim in Rising Water
 * https://leetcode.com/problems/swim-in-rising-water/
 * Difficulty: Hard
 *
 * You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation
 * at that point (i, j).
 *
 * The rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from
 * a square to another 4-directionally adjacent square if and only if the elevation of both squares
 * individually are at most t. You can swim infinite distances in zero time. Of course, you must
 * stay within the boundaries of the grid during your swim.
 *
 * Return the least time until you can reach the bottom right square (n - 1, n - 1) if you start
 * at the top left square (0, 0).
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
  const n = grid.length;
  let left = grid[0][0];
  let right = n * n - 1;

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const canReachDestination = (time) => {
    if (grid[0][0] > time) return false;

    const visited = Array(n).fill().map(() => Array(n).fill(false));
    const queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length > 0) {
      const [row, col] = queue.shift();

      if (row === n - 1 && col === n - 1) {
        return true;
      }

      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        if (
          newRow >= 0 && newRow < n && newCol >= 0 && newCol < n
          && !visited[newRow][newCol] && grid[newRow][newCol] <= time
        ) {
          queue.push([newRow, newCol]);
          visited[newRow][newCol] = true;
        }
      }
    }

    return false;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (canReachDestination(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
