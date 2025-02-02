/**
 * 172. Factorial Trailing Zeroes
 * https://leetcode.com/problems/factorial-trailing-zeroes/
 * Difficulty: Medium
 *
 * Given an integer n, return the number of trailing zeroes in n!.
 *
 * Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.
 */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  return n < 5 ? 0 : Math.floor(n / 5) + trailingZeroes(n / 5);
};
