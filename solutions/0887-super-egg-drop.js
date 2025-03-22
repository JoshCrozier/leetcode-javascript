/**
 * 887. Super Egg Drop
 * https://leetcode.com/problems/super-egg-drop/
 * Difficulty: Hard
 *
 * You are given k identical eggs and you have access to a building with n floors labeled
 * from 1 to n.
 *
 * You know that there exists a floor f where 0 <= f <= n such that any egg dropped at a
 * floor higher than f will break, and any egg dropped at or below floor f will not break.
 *
 * Each move, you may take an unbroken egg and drop it from any floor x (where 1 <= x <= n).
 * If the egg breaks, you can no longer use it. However, if the egg does not break, you may
 * reuse it in future moves.
 *
 * Return the minimum number of moves that you need to determine with certainty what the
 * value of f is.
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
  const dp = new Array(k + 1).fill().map(() => new Array(n + 1).fill(0));

  function solve(eggs, floors) {
    if (floors === 0 || floors === 1) return floors;
    if (eggs === 1) return floors;
    if (dp[eggs][floors]) return dp[eggs][floors];

    let minMoves = floors;
    let low = 1;
    let high = floors;

    while (low <= high) {
      const middle = Math.floor((low + high) / 2);
      const breakCase = solve(eggs - 1, middle - 1);
      const noBreakCase = solve(eggs, floors - middle);
      const moves = 1 + Math.max(breakCase, noBreakCase);

      minMoves = Math.min(minMoves, moves);
      if (breakCase < noBreakCase) low = middle + 1;
      else high = middle - 1;
    }

    dp[eggs][floors] = minMoves;
    return minMoves;
  }

  return solve(k, n);
};
