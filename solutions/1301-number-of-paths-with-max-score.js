/**
 * 1301. Number of Paths with Max Score
 * https://leetcode.com/problems/number-of-paths-with-max-score/
 * Difficulty: Hard
 *
 * You are given a square board of characters. You can move on the board starting at the bottom
 * right square marked with the character 'S'.
 *
 * You need to reach the top left square marked with the character 'E'. The rest of the squares
 * are labeled either with a numeric character 1, 2, ..., 9 or with an obstacle 'X'. In one move
 * you can go up, left or up-left (diagonally) only if there is no obstacle there.
 *
 * Return a list of two integers: the first integer is the maximum sum of numeric characters you
 * can collect, and the second is the number of such paths that you can take to get that maximum
 * sum, taken modulo 10^9 + 7.
 *
 * In case there is no path, return [0, 0].
 */

/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
  const n = board.length;
  const mod = 1000000007;
  const dp = Array.from({ length: n }, () =>
    new Array(n).fill([-Infinity, 0])
  );

  dp[n-1][n-1] = [0, 1];

  for (let row = n-1; row >= 0; row--) {
    for (let col = n-1; col >= 0; col--) {
      if (board[row][col] === 'X') {
        dp[row][col] = [-Infinity, 0];
        continue;
      }

      if (row === n-1 && col === n-1) continue;

      const value = board[row][col] === 'E' ? 0 : Number(board[row][col]);
      const directions = [[0, 1], [1, 0], [1, 1]];

      for (const [dr, dc] of directions) {
        const nextRow = row + dr;
        const nextCol = col + dc;

        if (nextRow >= n || nextCol >= n) continue;
        if (dp[nextRow][nextCol][1] === 0) continue;

        const score = dp[nextRow][nextCol][0] + value;
        if (score > dp[row][col][0]) {
          dp[row][col] = [score, dp[nextRow][nextCol][1]];
        } else if (score === dp[row][col][0]) {
          dp[row][col][1] = (dp[row][col][1] + dp[nextRow][nextCol][1]) % mod;
        }
      }
    }
  }

  return dp[0][0][1] === 0 ? [0, 0] : dp[0][0];
};
