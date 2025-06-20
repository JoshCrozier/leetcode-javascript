/**
 * 3443. Maximum Manhattan Distance After K Changes
 * https://leetcode.com/problems/maximum-manhattan-distance-after-k-changes/
 * Difficulty: Medium
 *
 * You are given a string s consisting of the characters 'N', 'S', 'E', and 'W', where s[i]
 * indicates movements in an infinite grid:
 * - 'N' : Move north by 1 unit.
 * - 'S' : Move south by 1 unit.
 * - 'E' : Move east by 1 unit.
 * - 'W' : Move west by 1 unit.
 *
 * Initially, you are at the origin (0, 0). You can change at most k characters to any of the
 * four directions.
 *
 * Find the maximum Manhattan distance from the origin that can be achieved at any time while
 * performing the movements in order.
 *
 * The Manhattan Distance between two cells (xi, yi) and (xj, yj) is |xi - xj| + |yi - yj|.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function(s, k) {
  const directions = {
    'N': [0, 1],
    'S': [0, -1],
    'E': [1, 0],
    'W': [-1, 0]
  };

  let x = 0;
  let y = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const [dx, dy] = directions[s[i]];
    x += dx;
    y += dy;

    const currentDistance = Math.abs(x) + Math.abs(y);
    const maxPossibleExtra = Math.min(2 * k, i + 1 - currentDistance);

    result = Math.max(result, currentDistance + maxPossibleExtra);
  }

  return result;
};
