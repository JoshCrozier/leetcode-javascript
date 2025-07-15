/**
 * 2847. Smallest Number With Given Digit Product
 * https://leetcode.com/problems/smallest-number-with-given-digit-product/
 * Difficulty: Medium
 *
 * Given a positive integer n, return a string representing the smallest positive integer
 * such that the product of its digits is equal to n, or "-1" if no such number exists.
 */

/**
 * @param {number} n
 * @return {string}
 */
var smallestNumber = function(n) {
  if (n < 10) return n.toString();

  const digits = [];
  let remaining = BigInt(n);
  for (let digit = 9; digit > 1 && remaining > 1n; digit--) {
    const bigDigit = BigInt(digit);
    while (remaining % bigDigit === 0n) {
      digits.push(digit);
      remaining /= bigDigit;
    }
  }

  if (remaining !== 1n) return '-1';

  return digits.reverse().join('');
};
