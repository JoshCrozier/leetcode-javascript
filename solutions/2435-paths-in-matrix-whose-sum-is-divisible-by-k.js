/**
 * 2435. Paths in Matrix Whose Sum Is Divisible by K
 * https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/
 * Difficulty: Hard
 *
 * You are given a 0-indexed m x n integer matrix grid and an integer k. You are currently at
 * position (0, 0) and you want to reach position (m - 1, n - 1) moving only down or right.
 *
 * Return the number of paths where the sum of the elements on the path is divisible by k.
 * Since the answer may be very large, return it modulo 109 + 7.
 */

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function(grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  const modulo = 1e9 + 7;
  const dp = Array.from({ length: rows }, () => {
    return Array.from({ length: cols }, () => Array(k).fill(0));
  });

  dp[0][0][grid[0][0] % k] = 1;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const currentValue = grid[row][col] % k;
      for (let sum = 0; sum < k; sum++) {
        if (row > 0) {
          const prevSum = (sum - currentValue + k) % k;
          dp[row][col][sum] = (dp[row][col][sum] + dp[row - 1][col][prevSum]) % modulo;
        }
        if (col > 0) {
          const prevSum = (sum - currentValue + k) % k;
          dp[row][col][sum] = (dp[row][col][sum] + dp[row][col - 1][prevSum]) % modulo;
        }
      }
    }
  }

  return dp[rows - 1][cols - 1][0];
};
