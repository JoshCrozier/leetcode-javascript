/**
 * 2139. Minimum Moves to Reach Target Score
 * https://leetcode.com/problems/minimum-moves-to-reach-target-score/
 * Difficulty: Medium
 *
 * You are playing a game with integers. You start with the integer 1 and you want to reach
 * the integer target.
 *
 * In one move, you can either:
 * - Increment the current integer by one (i.e., x = x + 1).
 * - Double the current integer (i.e., x = 2 * x).
 *
 * You can use the increment operation any number of times, however, you can only use the double
 * operation at most maxDoubles times.
 *
 * Given the two integers target and maxDoubles, return the minimum number of moves needed to
 * reach target starting with 1.
 */

/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function(target, maxDoubles) {
  let moves = 0;
  let current = target;

  while (current > 1 && maxDoubles > 0) {
    if (current % 2 === 0) {
      current /= 2;
      maxDoubles--;
    } else {
      current--;
    }
    moves++;
  }

  return moves + (current - 1);
};
