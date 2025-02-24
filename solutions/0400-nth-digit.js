/**
 * 400. Nth Digit
 * https://leetcode.com/problems/nth-digit/
 * Difficulty: Medium
 *
 * Given an integer n, return the nth digit of the infinite integer sequence
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].
 */

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let total = 1;
  let start = 1;

  for (let count = 9; n > total * count; total++, count *= 10, start *= 10) {
    n -= total * count;
  }

  start += Math.floor((n - 1) / total);
  return +(start.toString()[(n - 1) % total]);
};
