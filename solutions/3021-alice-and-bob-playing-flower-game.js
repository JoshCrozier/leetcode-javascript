/**
 * 3021. Alice and Bob Playing Flower Game
 * https://leetcode.com/problems/alice-and-bob-playing-flower-game/
 * Difficulty: Medium
 *
 * Alice and Bob are playing a turn-based game on a circular field surrounded by flowers.
 * The circle represents the field, and there are x flowers in the clockwise direction
 * between Alice and Bob, and y flowers in the anti-clockwise direction between them.
 *
 * The game proceeds as follows:
 * 1. Alice takes the first turn.
 * 2. In each turn, a player must choose either the clockwise or anti-clockwise direction
 *    and pick one flower from that side.
 * 3. At the end of the turn, if there are no flowers left at all, the current player
 *    captures their opponent and wins the game.
 *
 * Given two integers, n and m, the task is to compute the number of possible pairs (x, y)
 * that satisfy the conditions:
 * - Alice must win the game according to the described rules.
 * - The number of flowers x in the clockwise direction must be in the range [1,n].
 * - The number of flowers y in the anti-clockwise direction must be in the range [1,m].
 *
 * Return the number of possible pairs (x, y) that satisfy the conditions mentioned in the
 * statement.
 */

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function(n, m) {
  const evenN = Math.floor(n / 2);
  const evenM = Math.floor(m / 2);

  return evenN * (m - evenM) + (n - evenN) * evenM;
};
