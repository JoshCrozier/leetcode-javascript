/**
 * 812. Largest Triangle Area
 * https://leetcode.com/problems/largest-triangle-area/
 * Difficulty: Easy
 *
 * Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of
 * the largest triangle that can be formed by any three different points. Answers within 10-5 of
 * the actual answer will be accepted.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
  let maxArea = 0;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        const area = calculateTriangleArea(points[i], points[j], points[k]);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
};

function calculateTriangleArea(p1, p2, p3) {
  const [[x1, y1], [x2, y2], [x3, y3]] = [p1, p2, p3];
  return Math.abs(
    (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2
  );
}
