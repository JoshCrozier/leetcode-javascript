/**
 * 2481. Minimum Cuts to Divide a Circle
 * https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/
 * Difficulty: Easy
 *
 * A valid cut in a circle can be:
 * - A cut that is represented by a straight line that touches two points on the edge of the
 *   circle and passes through its center, or
 * - A cut that is represented by a straight line that touches one point on the edge of the
 *   circle and its center.
 *
 * Some valid and invalid cuts are shown in the figures below.
 *
 * Given the integer n, return the minimum number of cuts needed to divide a circle into n
 * equal slices.
 */

/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function(n) {
  return n === 1 ? 0 : n % 2 === 0 ? n / 2 : n;
};
