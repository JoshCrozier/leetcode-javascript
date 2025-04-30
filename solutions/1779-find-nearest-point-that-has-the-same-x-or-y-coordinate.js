/**
 * 1779. Find Nearest Point That Has the Same X or Y Coordinate
 * https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
 * Difficulty: Easy
 *
 * You are given two integers, x and y, which represent your current location on a Cartesian
 * grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents
 * that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the
 * same y-coordinate as your location.
 *
 * Return the index (0-indexed) of the valid point with the smallest Manhattan distance from
 * your current location. If there are multiple, return the valid point with the smallest index.
 * If there are no valid points, return -1.
 *
 * The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).
 */

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  let minDistance = Infinity;
  let result = -1;

  for (let i = 0; i < points.length; i++) {
    const [px, py] = points[i];
    if (px === x || py === y) {
      const distance = Math.abs(px - x) + Math.abs(py - y);
      if (distance < minDistance) {
        minDistance = distance;
        result = i;
      }
    }
  }

  return result;
};
