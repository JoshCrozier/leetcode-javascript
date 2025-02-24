/**
 * 391. Perfect Rectangle
 * https://leetcode.com/problems/perfect-rectangle/
 * Difficulty: Hard
 *
 * Given an array rectangles where rectangles[i] = [xi, yi, ai, bi] represents an axis-aligned
 * rectangle. The bottom-left point of the rectangle is (xi, yi) and the top-right point of it
 * is (ai, bi).
 *
 * Return true if all the rectangles together form an exact cover of a rectangular region.
 */

/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
  const result = new Set();
  let area = 0;
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  for (const [x1, y1, x2, y2] of rectangles) {
    area += (x2 - x1) * (y2 - y1);
    minX = Math.min(minX, x1);
    minY = Math.min(minY, y1);
    maxX = Math.max(maxX, x2);
    maxY = Math.max(maxY, y2);
    for (const corner of [`${x1},${y1}`, `${x2},${y1}`, `${x1},${y2}`, `${x2},${y2}`]) {
      result.has(corner) ? result.delete(corner) : result.add(corner);
    }
  }

  return area === (maxX - minX) * (maxY - minY) && result.size === 4
    && result.has(`${minX},${minY}`) && result.has(`${maxX},${minY}`)
    && result.has(`${minX},${maxY}`) && result.has(`${maxX},${maxY}`);
};
