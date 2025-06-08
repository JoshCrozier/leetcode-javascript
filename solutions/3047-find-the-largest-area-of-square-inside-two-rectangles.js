/**
 * 3047. Find the Largest Area of Square Inside Two Rectangles
 * https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/
 * Difficulty: Medium
 *
 * There exist n rectangles in a 2D plane with edges parallel to the x and y axis. You
 * are given two 2D integer arrays bottomLeft and topRight where bottomLeft[i] = [a_i, b_i]
 * and topRight[i] = [c_i, d_i] represent the bottom-left and top-right coordinates of the
 * ith rectangle, respectively.
 *
 * You need to find the maximum area of a square that can fit inside the intersecting
 * region of at least two rectangles. Return 0 if such a square does not exist.
 */

/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
var largestSquareArea = function(bottomLeft, topRight) {
  const n = bottomLeft.length;
  let maxSide = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const xLeft = Math.max(bottomLeft[i][0], bottomLeft[j][0]);
      const yBottom = Math.max(bottomLeft[i][1], bottomLeft[j][1]);
      const xRight = Math.min(topRight[i][0], topRight[j][0]);
      const yTop = Math.min(topRight[i][1], topRight[j][1]);

      if (xLeft < xRight && yBottom < yTop) {
        const side = Math.min(xRight - xLeft, yTop - yBottom);
        maxSide = Math.max(maxSide, side);
      }
    }
  }

  return maxSide * maxSide;
};
