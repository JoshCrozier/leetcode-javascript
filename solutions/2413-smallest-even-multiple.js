/**
 * 2413. Smallest Even Multiple
 * https://leetcode.com/problems/smallest-even-multiple/
 * Difficulty: Easy
 *
 * Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  return n * (n % 2 + 1);
};
