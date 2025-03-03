/**
 * 497. Random Point in Non-overlapping Rectangles
 * https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/
 * Difficulty: Medium
 *
 * You are given an array of non-overlapping axis-aligned rectangles rects where
 * rects[i] = [ai, bi, xi, yi] indicates that (ai, bi) is the bottom-left corner point of the
 * ith rectangle and (xi, yi) is the top-right corner point of the ith rectangle. Design an
 * algorithm to pick a random integer point inside the space covered by one of the given
 * rectangles. A point on the perimeter of a rectangle is included in the space covered by
 * the rectangle.
 *
 * Any integer point inside the space covered by one of the given rectangles should be equally
 * likely to be returned.
 *
 * Note that an integer point is a point that has integer coordinates.
 *
 * Implement the Solution class:
 * - Solution(int[][] rects) Initializes the object with the given rectangles rects.
 * - int[] pick() Returns a random integer point [u, v] inside the space covered by one of the
 *   given rectangles.
 */

/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
  this.rects = rects;
  this.areas = rects.map(([x1, y1, x2, y2]) => (x2 - x1 + 1) * (y2 - y1 + 1));
  this.totalPoints = this.areas.reduce((sum, area) => sum + area, 0);
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
  let random = Math.floor(Math.random() * this.totalPoints);
  let i = 0;
  while (random >= this.areas[i]) {
    random -= this.areas[i];
    i++;
  }
  const [x1, y1, x2, y2] = this.rects[i];
  const x = x1 + Math.floor(Math.random() * (x2 - x1 + 1));
  const y = y1 + Math.floor(Math.random() * (y2 - y1 + 1));
  return [x, y];
};
