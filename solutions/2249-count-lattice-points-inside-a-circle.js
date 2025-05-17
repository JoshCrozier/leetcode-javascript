/**
 * 2249. Count Lattice Points Inside a Circle
 * https://leetcode.com/problems/count-lattice-points-inside-a-circle/
 * Difficulty: Medium
 *
 * Given a 2D integer array circles where circles[i] = [xi, yi, ri] represents the center (xi, yi)
 * and radius ri of the ith circle drawn on a grid, return the number of lattice points that are
 * present inside at least one circle.
 *
 * Note:
 * - A lattice point is a point with integer coordinates.
 * - Points that lie on the circumference of a circle are also considered to be inside it.
 */

/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function(circles) {
  const set = new Set();

  for (const [x, y, r] of circles) {
    for (let i = x - r; i <= x + r; i++) {
      for (let j = y - r; j <= y + r; j++) {
        if ((x - i) ** 2 + (y - j) ** 2 <= r ** 2) {
          set.add(`${i},${j}`);
        }
      }
    }
  }

  return set.size;
};
