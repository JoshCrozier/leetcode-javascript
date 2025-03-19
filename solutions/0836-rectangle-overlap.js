/**
 * 836. Rectangle Overlap
 * https://leetcode.com/problems/rectangle-overlap/
 * Difficulty: Easy
 *
 * An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the
 * coordinate of its bottom-left corner, and (x2, y2) is the coordinate of its top-right corner.
 * Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel
 * to the Y-axis.
 *
 * Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles
 * that only touch at the corner or edges do not overlap.
 *
 * Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return
 * false.
 */

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  const [x1, y1, x2, y2] = rec1;
  const [a1, b1, a2, b2] = rec2;
  return x1 < a2 && a1 < x2 && y1 < b2 && b1 < y2;
};
