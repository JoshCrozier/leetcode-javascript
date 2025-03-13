/**
 * 741. Cherry Pickup
 * https://leetcode.com/problems/cherry-pickup/
 * Difficulty: Hard
 *
 * You are given an n x n grid representing a field of cherries, each cell is one of three
 * possible integers.
 * - 0 means the cell is empty, so you can pass through,
 * - 1 means the cell contains a cherry that you can pick up and pass through, or
 * - -1 means the cell contains a thorn that blocks your way.
 *
 * Return the maximum number of cherries you can collect by following the rules below:
 * - Starting at the position (0, 0) and reaching (n - 1, n - 1) by moving right or down through
 *   valid path cells (cells with value 0 or 1).
 * - After reaching (n - 1, n - 1), returning to (0, 0) by moving left or up through valid path
 *   cells.
 * - When passing through a path cell containing a cherry, you pick it up, and the cell becomes
 *   an empty cell 0.
 * - If there is no valid path between (0, 0) and (n - 1, n - 1), then no cherries can be collected.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
  const n = grid.length;
  const dp = Array.from({ length: n }, () =>
    Array.from({ length: n }, () =>
      new Array(2 * n - 1).fill(-1))
  );

  if (grid[0][0] === -1) return 0;
  dp[0][0][0] = grid[0][0];

  for (let t = 1; t <= 2 * n - 2; t++) {
    for (let x1 = Math.max(0, t - n + 1); x1 <= Math.min(n - 1, t); x1++) {
      for (let x2 = Math.max(0, t - n + 1); x2 <= Math.min(n - 1, t); x2++) {
        const y1 = t - x1;
        const y2 = t - x2;

        if (grid[x1][y1] === -1 || grid[x2][y2] === -1) continue;

        const cherries = grid[x1][y1] + (x1 === x2 ? 0 : grid[x2][y2]);
        let maxPrev = -1;

        for (const px1 of [x1 - 1, x1]) {
          for (const px2 of [x2 - 1, x2]) {
            if (px1 >= 0 && px2 >= 0 && dp[px1][px2][t - 1] >= 0) {
              maxPrev = Math.max(maxPrev, dp[px1][px2][t - 1]);
            }
          }
        }

        if (maxPrev >= 0) {
          dp[x1][x2][t] = maxPrev + cherries;
        }
      }
    }
  }

  return dp[n - 1][n - 1][2 * n - 2] < 0 ? 0 : dp[n - 1][n - 1][2 * n - 2];
};
