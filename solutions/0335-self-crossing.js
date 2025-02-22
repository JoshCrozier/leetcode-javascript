/**
 * 335. Self Crossing
 * https://leetcode.com/problems/self-crossing/
 * Difficulty: Hard
 *
 * You are given an array of integers distance.
 *
 * You start at the point (0, 0) on an X-Y plane, and you move distance[0] meters to the north, then
 * distance[1] meters to the west, distance[2] meters to the south, distance[3] meters to the east,
 * and so on. In other words, after each move, your direction changes counter-clockwise.
 *
 * Return true if your path crosses itself or false if it does not.
 */

/**
 * @param {number[]} d
 * @return {boolean}
 */
var isSelfCrossing = function(d) {
  for (let i = 3; i < d.length; i++) {
    if (d[i] >= d[i - 2] && d[i - 1] <= d[i - 3]) {
      return true;
    }
    if (i >= 4 && d[i - 1] === d[i - 3] && d[i] + d[i - 4] >= d[i - 2]) {
      return true;
    }
    if (i >= 5 && d[i - 2] >= d[i - 4] && d[i] + d[i - 4] >= d[i - 2]
        && d[i - 1] <= d[i - 3] && d[i - 1] + d[i - 5] >= d[i - 3]) {
      return true;
    }
  }
  return false;
};
