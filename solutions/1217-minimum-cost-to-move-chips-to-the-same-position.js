/**
 * 1217. Minimum Cost to Move Chips to The Same Position
 * https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/
 * Difficulty: Easy
 *
 * We have n chips, where the position of the ith chip is position[i].
 *
 * We need to move all the chips to the same position. In one step, we can change the position
 * of the ith chip from position[i] to:
 * - position[i] + 2 or position[i] - 2 with cost = 0.
 * - position[i] + 1 or position[i] - 1 with cost = 1.
 *
 * Return the minimum cost needed to move all the chips to the same position.
 */

/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  const count = position.reduce((result, n) => n % 2 ? ++result : result, 0);
  return count >= position.length / 2 ? position.length - count : count;
};
