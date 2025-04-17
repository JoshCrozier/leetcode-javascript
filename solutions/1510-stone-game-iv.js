/**
 * 1510. Stone Game IV
 * https://leetcode.com/problems/stone-game-iv/
 * Difficulty: Hard
 *
 * Alice and Bob take turns playing a game, with Alice starting first.
 *
 * Initially, there are n stones in a pile. On each player's turn, that player makes a move
 * consisting of removing any non-zero square number of stones in the pile.
 *
 * Also, if a player cannot make a move, he/she loses the game.
 *
 * Given a positive integer n, return true if and only if Alice wins the game otherwise return
 * false, assuming both players play optimally.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function(n) {
  const dp = new Array(n + 1).fill(false);

  for (let stones = 1; stones <= n; stones++) {
    for (let square = 1; square * square <= stones; square++) {
      if (!dp[stones - square * square]) {
        dp[stones] = true;
        break;
      }
    }
  }

  return dp[n];
};
