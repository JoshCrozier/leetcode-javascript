/**
 * 149. Max Points on a Line
 * https://leetcode.com/problems/max-points-on-a-line/
 * Difficulty: Hard
 *
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane,
 * return the maximum number of points that lie on the same straight line.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  let max = 0;

  points.forEach(x => {
    const slopes = new Map();

    points.forEach(y => {
      if (x === y) return;
      const slope = y[0] - x[0] !== 0 ? (y[1] - x[1]) / (y[0] - x[0]) : Infinity;
      slopes.set(slope, (slopes.get(slope) || 0) + 1);
      max = Math.max(max, slopes.get(slope));
    });
  });

  return max + 1;
};
