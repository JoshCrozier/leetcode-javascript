/**
 * 593. Valid Square
 * https://leetcode.com/problems/valid-square/
 * Difficulty: Medium
 *
 * Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the
 * four points construct a square.
 *
 * The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.
 *
 * A valid square has four equal sides with positive length and four equal angles (90-degree
 * angles).
 */

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  const helper = (a, b) => (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
  const points = [p1, p2, p3, p4];
  const set = new Set();

  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      const d = helper(points[i], points[j]);
      if (!d) {
        return false;
      }
      set.add(d);
    }
  }

  return set.size === 2;
};
