/**
 * 1936. Add Minimum Number of Rungs
 * https://leetcode.com/problems/add-minimum-number-of-rungs/
 * Difficulty: Medium
 *
 * You are given a strictly increasing integer array rungs that represents the height of rungs
 * on a ladder. You are currently on the floor at height 0, and you want to reach the last rung.
 *
 * You are also given an integer dist. You can only climb to the next highest rung if the
 * distance between where you are currently at (the floor or on a rung) and the next rung is
 * at most dist. You are able to insert rungs at any positive integer height if a rung is not
 * already there.
 *
 * Return the minimum number of rungs that must be added to the ladder in order for you to climb
 * to the last rung.
 */

/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function(rungs, dist) {
  let currentHeight = 0;
  let result = 0;

  for (const rung of rungs) {
    const gap = rung - currentHeight;
    if (gap > dist) {
      result += Math.ceil(gap / dist) - 1;
    }
    currentHeight = rung;
  }

  return result;
};
