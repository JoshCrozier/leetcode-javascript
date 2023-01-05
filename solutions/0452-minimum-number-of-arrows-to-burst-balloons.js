/**
 * 452. Minimum Number of Arrows to Burst Balloons
 * https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
 * Difficulty: Medium
 *
 * There are some spherical balloons taped onto a flat wall that represents the XY-plane.
 * The balloons are represented as a 2D integer array points where points[i] = [xstart, xend]
 * denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not
 * know the exact y-coordinates of the balloons.
 *
 * Arrows can be shot up directly vertically (in the positive y-direction) from different points
 * along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if
 * x(start) <= x <= x(end). There is no limit to the number of arrows that can be shot. A shot
 * arrow keeps traveling up infinitely, bursting any balloons in its path.
 *
 * Given the array points, return the minimum number of arrows that must be shot to burst all
 * balloons.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  let result = 0;
  let i = 0;

  points.sort(([a], [b]) => a - b);

  while (i < points.length) {
    let [left, right] = points[i];
    i++;
    while (i < points.length && points[i][0] <= right && points[i][1] >= left) {
      left = Math.max(left, points[i][0]);
      right = Math.min(right, points[i][1]);
      i++;
    }
    result++;
  }

  return result;
};
