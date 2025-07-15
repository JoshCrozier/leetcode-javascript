/**
 * 2912. Number of Ways to Reach Destination in the Grid
 * https://leetcode.com/problems/number-of-ways-to-reach-destination-in-the-grid/
 * Difficulty: Hard
 *
 * You are given two integers n and m which represent the size of a 1-indexed grid. You are
 * also given an integer k, a 1-indexed integer array source and a 1-indexed integer array
 * dest, where source and dest are in the form [x, y] representing a cell on the given grid.
 *
 * You can move through the grid in the following way:
 * - You can go from cell [x1, y1] to cell [x2, y2] if either x1 == x2 or y1 == y2.
 * - Note that you can't move to the cell you are already in e.g. x1 == x2 and y1 == y2.
 *
 * Return the number of ways you can reach dest from source by moving through the grid exactly
 * k times.
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @param {number[]} source
 * @param {number[]} dest
 * @return {number}
 */
var numberOfWays = function(n, m, k, source, dest) {
  const MOD = 1e9 + 7;
  const dp = new Array(k + 1).fill().map(() => new Array(4).fill(0));

  if (source[0] === dest[0] && source[1] === dest[1]) {
    dp[0][0] = 1;
  } else if (source[0] === dest[0]) {
    dp[0][1] = 1;
  } else if (source[1] === dest[1]) {
    dp[0][2] = 1;
  } else {
    dp[0][3] = 1;
  }

  for (let i = 1; i <= k; i++) {
    dp[i][0] = (dp[i - 1][1] + dp[i - 1][2]) % MOD;
    dp[i][1] = (BigInt(dp[i - 1][0]) * BigInt(m - 1) + BigInt(dp[i - 1][1])
      * BigInt(m - 2) + BigInt(dp[i - 1][3])) % BigInt(MOD);
    dp[i][2] = (BigInt(dp[i - 1][0]) * BigInt(n - 1) + BigInt(dp[i - 1][2])
      * BigInt(n - 2) + BigInt(dp[i - 1][3])) % BigInt(MOD);
    dp[i][3] = (BigInt(dp[i - 1][1]) * BigInt(n - 1) + BigInt(dp[i - 1][2])
      * BigInt(m - 1) + BigInt(dp[i - 1][3]) * BigInt(m + n - 4)) % BigInt(MOD);
    dp[i][1] = Number(dp[i][1]);
    dp[i][2] = Number(dp[i][2]);
    dp[i][3] = Number(dp[i][3]);
  }

  return dp[k][0];
};
