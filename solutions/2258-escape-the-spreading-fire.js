/**
 * 2258. Escape the Spreading Fire
 * https://leetcode.com/problems/escape-the-spreading-fire/
 * Difficulty: Hard
 *
 * You are given a 0-indexed 2D integer array grid of size m x n which represents a field.
 * Each cell has one of three values:
 * - 0 represents grass,
 * - 1 represents fire,
 * - 2 represents a wall that you and fire cannot pass through.
 *
 * You are situated in the top-left cell, (0, 0), and you want to travel to the safehouse at the
 * bottom-right cell, (m - 1, n - 1). Every minute, you may move to an adjacent grass cell. After
 * your move, every fire cell will spread to all adjacent cells that are not walls.
 *
 * Return the maximum number of minutes that you can stay in your initial position before moving
 * while still safely reaching the safehouse. If this is impossible, return -1. If you can always
 * reach the safehouse regardless of the minutes stayed, return 109.
 *
 * Note that even if the fire spreads to the safehouse immediately after you have reached it, it
 * will be counted as safely reaching the safehouse.
 *
 * A cell is adjacent to another cell if the former is directly north, east, south, or west of the
 * latter (i.e., their sides are touching).
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumMinutes = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const MAX_ANSWER = 1000000000;

  function isValid(x, y) {
    return x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 0;
  }

  function calculateFireTime() {
    const fireTime = new Array(m).fill().map(() => new Array(n).fill(Infinity));
    const queue = [];

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1) {
          queue.push([i, j, 0]);
          fireTime[i][j] = 0;
        }
      }
    }

    while (queue.length > 0) {
      const [x, y, time] = queue.shift();

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (isValid(nx, ny) && fireTime[nx][ny] === Infinity) {
          fireTime[nx][ny] = time + 1;
          queue.push([nx, ny, time + 1]);
        }
      }
    }

    return fireTime;
  }

  function canReachSafehouse(delay) {
    const fireTime = calculateFireTime();
    const visited = new Array(m).fill().map(() => new Array(n).fill(false));
    const queue = [[0, 0, delay]];
    visited[0][0] = true;

    while (queue.length > 0) {
      const [x, y, time] = queue.shift();

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (!isValid(nx, ny) || visited[nx][ny]) continue;

        if (nx === m - 1 && ny === n - 1) {
          if (time + 1 <= fireTime[nx][ny] || fireTime[nx][ny] === Infinity) {
            return true;
          }
        }

        if (time + 1 < fireTime[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny, time + 1]);
        }
      }
    }

    return false;
  }

  let left = 0;
  let right = MAX_ANSWER;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canReachSafehouse(mid)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};
