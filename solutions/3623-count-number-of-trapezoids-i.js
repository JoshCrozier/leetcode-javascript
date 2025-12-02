/**
 * 3623. Count Number of Trapezoids I
 * https://leetcode.com/problems/count-number-of-trapezoids-i/
 * Difficulty: Medium
 *
 * You are given a 2D integer array points, where points[i] = [xi, yi] represents the
 * coordinates of the ith point on the Cartesian plane.
 *
 * A horizontal trapezoid is a convex quadrilateral with at least one pair of horizontal
 * sides (i.e. parallel to the x-axis). Two lines are parallel if and only if they have
 * the same slope.
 *
 * Return the number of unique horizontal trapezoids that can be formed by choosing any
 * four distinct points from points.
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function(points) {
  const MOD = 1e9 + 7;

  const map = new Map();
  for (const [x, y] of points) {
    map.set(y, (map.get(y) || 0) + 1);
  }

  let result = 0n;
  let total = 0n;
  for (const count of map.values()) {
    const lines = BigInt(count) * BigInt(count - 1) / 2n;
    result = (result + total * lines) % BigInt(MOD);
    total = (total + lines) % BigInt(MOD);
  }

  return Number(result);
};
