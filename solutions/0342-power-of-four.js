/**
 * 342. Power of Four
 * https://leetcode.com/problems/power-of-four/
 * Difficulty: Easy
 *
 * Given an integer n, return true if it is a power of four. Otherwise, return false.
 *
 * An integer n is a power of four, if there exists an integer x such that n == 4x.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  if (n > 1) {
    while (n % 4 === 0) {
      n /= 4
    }
  }
  return n === 1;
};
