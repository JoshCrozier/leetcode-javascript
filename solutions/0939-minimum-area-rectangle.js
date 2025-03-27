/**
 * 939. Minimum Area Rectangle
 * https://leetcode.com/problems/minimum-area-rectangle/
 * Difficulty: Medium
 *
 * You are given an array of points in the X-Y plane points where points[i] = [xi, yi].
 *
 * Return the minimum area of a rectangle formed from these points, with sides parallel to the
 * X and Y axes. If there is not any such rectangle, return 0.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
  const pointSet = new Set(points.map(([x, y]) => `${x},${y}`));
  let result = 0;

  for (let i = 0; i < points.length; i++) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < points.length; j++) {
      const [x2, y2] = points[j];
      if (x1 !== x2 && y1 !== y2) {
        if (pointSet.has(`${x1},${y2}`) && pointSet.has(`${x2},${y1}`)) {
          const area = Math.abs(x1 - x2) * Math.abs(y1 - y2);
          result = result === 0 ? area : Math.min(result, area);
        }
      }
    }
  }

  return result;
};
