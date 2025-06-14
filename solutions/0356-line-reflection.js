/**
 * 356. Line Reflection
 * https://leetcode.com/problems/line-reflection/
 * Difficulty: Medium
 *
 * Given n points on a 2D plane, find if there is such a line parallel to the y-axis that reflects
 * the given points symmetrically.
 *
 * In other words, answer whether or not if there exists a line that after reflecting all points
 * over the given line, the original points' set is the same as the reflected ones.
 *
 * Note that there can be repeated points.
 */

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isReflected = function(points) {
  const pointSet = new Set(points.map(([x, y]) => `${x},${y}`));
  let minX = Infinity;
  let maxX = -Infinity;

  for (const [x] of points) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
  }

  const sum = minX + maxX;
  for (const [x, y] of points) {
    if (!pointSet.has(`${sum - x},${y}`)) {
      return false;
    }
  }

  return true;
};
