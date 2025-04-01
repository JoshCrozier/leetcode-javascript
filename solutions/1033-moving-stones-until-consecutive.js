/**
 * 1033. Moving Stones Until Consecutive
 * https://leetcode.com/problems/moving-stones-until-consecutive/
 * Difficulty: Medium
 *
 * There are three stones in different positions on the X-axis. You are given three integers a, b,
 * and c, the positions of the stones.
 *
 * In one move, you pick up a stone at an endpoint (i.e., either the lowest or highest position
 * stone), and move it to an unoccupied position between those endpoints. Formally, let's say the
 * stones are currently at positions x, y, and z with x < y < z. You pick up the stone at either
 * position x or position z, and move that stone to an integer position k, with x < k < z and
 * k != y.
 *
 * The game ends when you cannot make any more moves (i.e., the stones are in three consecutive
 * positions).
 *
 * Return an integer array answer of length 2 where:
 * - answer[0] is the minimum number of moves you can play, and
 * - answer[1] is the maximum number of moves you can play.
 */

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
  const positions = [a, b, c].sort((x, y) => x - y);
  const minGap = Math.min(positions[1] - positions[0], positions[2] - positions[1]);
  const totalGap = positions[2] - positions[0] - 2;

  const minMoves = positions[1] - positions[0] === 1 && positions[2] - positions[1] === 1
    ? 0 : minGap <= 2 ? 1 : 2;
  const maxMoves = totalGap;

  return [minMoves, maxMoves];
};
