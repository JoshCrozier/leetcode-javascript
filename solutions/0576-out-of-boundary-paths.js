/**
 * 576. Out of Boundary Paths
 * https://leetcode.com/problems/out-of-boundary-paths/
 * Difficulty: Medium
 *
 * There is an m x n grid with a ball. The ball is initially at the position [startRow,
 * startColumn]. You are allowed to move the ball to one of the four adjacent cells in
 * the grid (possibly out of the grid crossing the grid boundary). You can apply at most
 * maxMove moves to the ball.
 *
 * Given the five integers m, n, maxMove, startRow, startColumn, return the number of
 * paths to move the ball out of the grid boundary. Since the answer can be very large,
 * return it modulo 109 + 7.
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
  const MOD = 1e9 + 7;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const dp = new Array(maxMove + 1).fill().map(() => {
    return new Array(m).fill().map(() => new Array(n).fill(-1));
  });

  return solve(maxMove, startRow, startColumn);

  function solve(moves, row, col) {
    if (row < 0 || row >= m || col < 0 || col >= n) return 1;
    if (moves === 0) return 0;
    if (dp[moves][row][col] !== -1) return dp[moves][row][col];

    let paths = 0;
    for (const [dr, dc] of directions) {
      paths = (paths + solve(moves - 1, row + dr, col + dc)) % MOD;
    }
    return dp[moves][row][col] = paths;
  }
};
