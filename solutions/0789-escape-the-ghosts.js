/**
 * 789. Escape The Ghosts
 * https://leetcode.com/problems/escape-the-ghosts/
 * Difficulty: Medium
 *
 * You are playing a simplified PAC-MAN game on an infinite 2-D grid. You start at the point
 * [0, 0], and you are given a destination point target = [xtarget, ytarget] that you are trying
 * to get to. There are several ghosts on the map with their starting positions given as a 2D
 * array ghosts, where ghosts[i] = [xi, yi] represents the starting position of the ith ghost.
 * All inputs are integral coordinates.
 *
 * Each turn, you and all the ghosts may independently choose to either move 1 unit in any of
 * the four cardinal directions: north, east, south, or west, or stay still. All actions happen
 * simultaneously.
 *
 * You escape if and only if you can reach the target before any ghost reaches you. If you reach
 * any square (including the target) at the same time as a ghost, it does not count as an escape.
 *
 * Return true if it is possible to escape regardless of how the ghosts move, otherwise return
 * false.
 */

/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
  const distanceToTarget = calcDistance([0, 0], target);

  for (const ghost of ghosts) {
    const ghostDistance = calcDistance(ghost, target);
    if (ghostDistance <= distanceToTarget) {
      return false;
    }
  }

  return true;
};

function calcDistance(point1, point2) {
  return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
}
