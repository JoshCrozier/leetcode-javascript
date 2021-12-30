/**
 * 29. Divide Two Integers
 * https://leetcode.com/problems/divide-two-integers/
 * Difficulty: Medium
 *
 * Given two integers dividend and divisor, divide two integers without using multiplication,
 * division, and mod operator.
 *
 * The integer division should truncate toward zero, which means losing its fractional part.
 * For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
 *
 * Return the quotient after dividing dividend by divisor.
 *
 * Note: Assume we are dealing with an environment that could only store integers within the
 * 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly
 * greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231,
 * then return -231.
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (divisor === -1 && dividend === Math.pow(-2, 31)) {
    return Math.pow(2, 31) - 1;
  }
  const isNegative = dividend > 0 ^ divisor > 0;
  let result = 0;

  dividend = Math.abs(dividend);
  subtract(Math.abs(divisor), 1);

  function subtract(n, quotient) {
    if (dividend > n) {
      subtract(n * 2, quotient * 2);
    }
    if (dividend >= n) {
      dividend -= n;
      result += quotient;
    }
  }

  return isNegative ? -result : result;
};
