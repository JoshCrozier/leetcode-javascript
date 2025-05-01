/**
 * 1828. Queries on Number of Points Inside a Circle
 * https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/
 * Difficulty: Medium
 *
 * You are given an array points where points[i] = [xi, yi] is the coordinates of the ith
 * point on a 2D plane. Multiple points can have the same coordinates.
 *
 * You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle
 * centered at (xj, yj) with a radius of rj.
 *
 * For each query queries[j], compute the number of points inside the jth circle. Points on
 * the border of the circle are considered inside.
 *
 * Return an array answer, where answer[j] is the answer to the jth query.
 */

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
  const result = [];

  for (const [centerX, centerY, radius] of queries) {
    let pointsInside = 0;
    for (const [pointX, pointY] of points) {
      const distance = Math.sqrt((centerX - pointX) ** 2 + (centerY - pointY) ** 2);
      if (distance <= radius) {
        pointsInside++;
      }
    }
    result.push(pointsInside);
  }

  return result;
};
