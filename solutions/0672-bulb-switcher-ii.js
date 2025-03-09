/**
 * 672. Bulb Switcher II
 * https://leetcode.com/problems/bulb-switcher-ii/
 * Difficulty: Medium
 *
 * There is a room with n bulbs labeled from 1 to n that all are turned on initially, and four
 * buttons on the wall. Each of the four buttons has a different functionality where:
 * - Button 1: Flips the status of all the bulbs.
 * - Button 2: Flips the status of all the bulbs with even labels (i.e., 2, 4, ...).
 * - Button 3: Flips the status of all the bulbs with odd labels (i.e., 1, 3, ...).
 * - Button 4: Flips the status of all the bulbs with a label j = 3k + 1 where k = 0, 1, 2, ...
 *   (i.e., 1, 4, 7, 10, ...).
 * - You must make exactly presses button presses in total. For each press, you may pick any
 *   of the four buttons to press.
 *
 * Given the two integers n and presses, return the number of different possible statuses after
 * performing all presses button presses.
 */

/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
var flipLights = function(n, presses) {
  if (presses === 0) return 1;
  if (n === 1) return presses >= 1 ? 2 : 1;
  if (n === 2) return presses === 1 ? 3 : 4;
  if (presses === 1) return 4;
  if (presses === 2) return 7;
  return 8;
};
