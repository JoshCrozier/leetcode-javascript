/**
 * 1232. Check If It Is a Straight Line
 * https://leetcode.com/problems/check-if-it-is-a-straight-line/
 * Difficulty: Easy
 *
 * You are given an array `coordinates`, `coordinates[i] = [x, y]`,
 * where `[x, y] represents the coordinate of a point.
 *
 * Check if these points make a straight line in the XY plane.
 */

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coords) {
  const m = (coords[0][1] - coords[1][1]) / (coords[0][0] - coords[1][0]);
  const b = coords[0][1] - m * coords[0][0];

  return coords.every(coord => coord[1] === m * coord[0] + b);
};
