/**
 * 2250. Count Number of Rectangles Containing Each Point
 * https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/
 * Difficulty: Medium
 *
 * You are given a 2D integer array rectangles where rectangles[i] = [li, hi] indicates that ith
 * rectangle has a length of li and a height of hi. You are also given a 2D integer array points
 * where points[j] = [xj, yj] is a point with coordinates (xj, yj).
 *
 * The ith rectangle has its bottom-left corner point at the coordinates (0, 0) and its top-right
 * corner point at (li, hi).
 *
 * Return an integer array count of length points.length where count[j] is the number of rectangles
 * that contain the jth point.
 *
 * The ith rectangle contains the jth point if 0 <= xj <= li and 0 <= yj <= hi. Note that points
 * that lie on the edges of a rectangle are also considered to be contained by that rectangle.
 */

/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
var countRectangles = function(rectangles, points) {
  const rectByHeight = new Array(101).fill().map(() => []);

  for (const [length, height] of rectangles) {
    rectByHeight[height].push(length);
  }

  for (let h = 0; h <= 100; h++) {
    rectByHeight[h].sort((a, b) => a - b);
  }

  const result = new Array(points.length).fill(0);
  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];

    for (let h = y; h <= 100; h++) {
      const lengths = rectByHeight[h];

      let left = 0;
      let right = lengths.length - 1;
      let insertPos = lengths.length;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (lengths[mid] >= x) {
          insertPos = mid;
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }

      result[i] += lengths.length - insertPos;
    }
  }

  return result;
};
