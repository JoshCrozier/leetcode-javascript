/**
 * 397. Integer Replacement
 * https://leetcode.com/problems/integer-replacement/
 * Difficulty: Medium
 *
 * Given a positive integer n, you can apply one of the following operations:
 * 1. If n is even, replace n with n / 2.
 * 2. If n is odd, replace n with either n + 1 or n - 1.
 *
 * Return the minimum number of operations needed for n to become 1.
 */

/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @param {number} count
 * @return {number}
 */
var integerReplacement = function(n, count = 0) {
  if (n === 1) return count;
  if (n % 2 === 0) {
    return integerReplacement(n / 2, count + 1);
  } else {
    return Math.min(integerReplacement(n + 1, count + 1), integerReplacement(n - 1, count + 1));
  }
};
