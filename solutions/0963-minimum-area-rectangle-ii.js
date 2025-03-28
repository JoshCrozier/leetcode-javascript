/**
 * 963. Minimum Area Rectangle II
 * https://leetcode.com/problems/minimum-area-rectangle-ii/
 * Difficulty: Medium
 *
 * You are given an array of points in the X-Y plane points where points[i] = [xi, yi].
 *
 * Return the minimum area of any rectangle formed from these points, with sides not necessarily
 * parallel to the X and Y axes. If there is not any such rectangle, return 0.
 *
 * Answers within 10^-5 of the actual answer will be accepted.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaFreeRect = function(points) {
  const n = points.length;
  const set = new Set(points.map(p => `${p[0]},${p[1]}`));
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      const dx1 = x2 - x1;
      const dy1 = y2 - y1;

      for (let k = 0; k < n; k++) {
        if (k === i || k === j) continue;
        const [x3, y3] = points[k];
        const dx2 = x3 - x1;
        const dy2 = y3 - y1;

        if (dx1 * dx2 + dy1 * dy2 !== 0) continue;

        const x4 = x2 + dx2;
        const y4 = y2 + dy2;

        if (set.has(`${x4},${y4}`)) {
          const area = Math.sqrt(dx1 * dx1 + dy1 * dy1) * Math.sqrt(dx2 * dx2 + dy2 * dy2);
          result = result === 0 ? area : Math.min(result, area);
        }
      }
    }
  }

  return result;
};
