/**
 * 1884. Egg Drop With 2 Eggs and N Floors
 * https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/
 * Difficulty: Medium
 *
 * You are given two identical eggs and you have access to a building with n floors labeled
 * from 1 to n.
 *
 * You know that there exists a floor f where 0 <= f <= n such that any egg dropped at a floor
 * higher than f will break, and any egg dropped at or below floor f will not break.
 *
 * In each move, you may take an unbroken egg and drop it from any floor x (where 1 <= x <= n).
 * If the egg breaks, you can no longer use it. However, if the egg does not break, you may
 * reuse it in future moves.
 *
 * Return the minimum number of moves that you need to determine with certainty what the value
 * of f is.
 */

/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
  const dp = Array.from({ length: 3 }, () => new Array(n + 1).fill(Infinity));
  dp[0][0] = 0;
  dp[1][0] = 0;
  dp[2][0] = 0;

  for (let floors = 1; floors <= n; floors++) {
    dp[1][floors] = floors;
    for (let eggs = 2; eggs <= 2; eggs++) {
      for (let k = 1; k <= floors; k++) {
        const breaks = dp[eggs - 1][k - 1];
        const survives = dp[eggs][floors - k];
        dp[eggs][floors] = Math.min(dp[eggs][floors], 1 + Math.max(breaks, survives));
      }
    }
  }

  return dp[2][n];
};
