/**
 * 469. Convex Polygon
 * https://leetcode.com/problems/convex-polygon/
 * Difficulty: Medium
 *
 * You are given an array of points on the X-Y plane points where points[i] = [xi, yi].
 * The points form a polygon when joined sequentially.
 *
 * Return true if this polygon is convex and false otherwise.
 *
 * You may assume the polygon formed by given points is always a simple polygon. In other
 * words, we ensure that exactly two edges intersect at each vertex and that edges otherwise
 * don't intersect each other.
 */

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isConvex = function(points) {
  const n = points.length;
  let prevSign = 0;

  for (let i = 0; i < n; i++) {
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];
    const dx1 = p2[0] - p1[0];
    const dy1 = p2[1] - p1[1];
    const dx2 = p3[0] - p2[0];
    const dy2 = p3[1] - p2[1];
    const crossProduct = dx1 * dy2 - dy1 * dx2;
    const currentSign = Math.sign(crossProduct);

    if (currentSign !== 0) {
      if (prevSign !== 0 && currentSign !== prevSign) {
        return false;
      }
      prevSign = currentSign;
    }
  }

  return true;
};
