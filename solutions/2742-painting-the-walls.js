/**
 * 2742. Painting the Walls
 * https://leetcode.com/problems/painting-the-walls/
 * Difficulty: Hard
 *
 * You are given two 0-indexed integer arrays, cost and time, of size n representing the costs
 * and the time taken to paint n different walls respectively. There are two painters available:
 * - A paid painter that paints the ith wall in time[i] units of time and takes cost[i] units of
 *   money.
 * - A free painter that paints any wall in 1 unit of time at a cost of 0. But the free painter
 *   can only be used if the paid painter is already occupied.
 *
 * Return the minimum amount of money required to paint the n walls.
 */

/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function(cost, time) {
  const n = cost.length;
  const dp = new Array(n + 1).fill().map(() => new Array(n + 1).fill(Infinity));
  dp[0][0] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n; j++) {
      if (dp[i][j] === Infinity) continue;

      dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j]);

      const walls = Math.min(n, j + time[i] + 1);
      dp[i + 1][walls] = Math.min(dp[i + 1][walls], dp[i][j] + cost[i]);
    }
  }

  return dp[n][n];
};
