/**
 * 754. Reach a Number
 * https://leetcode.com/problems/reach-a-number/
 * Difficulty: Medium
 *
 * You are standing at position 0 on an infinite number line. There is a destination at
 * position target.
 *
 * You can make some number of moves numMoves so that:
 * - On each move, you can either go left or right.
 * - During the ith move (starting from i == 1 to i == numMoves), you take i steps in the
 *   chosen direction.
 *
 * Given the integer target, return the minimum number of moves required (i.e., the minimum
 * numMoves) to reach the destination.
 */

/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
  const absTarget = Math.abs(target);
  let moves = Math.floor(Math.sqrt(2 * absTarget));

  while (true) {
    const sum = moves * (moves + 1) / 2;
    if (sum >= absTarget && (sum - absTarget) % 2 === 0) return moves;
    moves++;
  }
};
