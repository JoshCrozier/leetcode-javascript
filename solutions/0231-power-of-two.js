/**
 * 231. Power of Two
 * https://leetcode.com/problems/power-of-two/
 * Difficulty: Easy
 *
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 *
 * An integer n is a power of two, if there exists an integer x such that n == 2x.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n > 1) {
    while (n % 2 === 0) {
      n /= 2
    }
  }
  return n === 1;
};
