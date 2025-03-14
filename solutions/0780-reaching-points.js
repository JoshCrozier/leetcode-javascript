/**
 * 780. Reaching Points
 * https://leetcode.com/problems/reaching-points/
 * Difficulty: Hard
 *
 * Given four integers sx, sy, tx, and ty, return true if it is possible to convert the point
 * (sx, sy) to the point (tx, ty) through some operations, or false otherwise.
 *
 * The allowed operation on some point (x, y) is to convert it to either (x, x + y) or (x + y, y).
 */

/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
  while (tx >= sx && ty >= sy) {
    if (tx === sx && ty === sy) {
      return true;
    }

    if (tx > ty) {
      // If we can directly reach sx by making proper subtractions
      if (ty === sy) {
        return (tx - sx) % ty === 0;
      }
      tx %= ty;
    } else {
      // If we can directly reach sy by making proper subtractions
      if (tx === sx) {
        return (ty - sy) % tx === 0;
      }
      ty %= tx;
    }
  }

  return false;
};
