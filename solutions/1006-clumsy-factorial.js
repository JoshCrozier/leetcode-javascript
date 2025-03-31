/**
 * 1006. Clumsy Factorial
 * https://leetcode.com/problems/clumsy-factorial/
 * Difficulty: Medium
 *
 * The factorial of a positive integer n is the product of all positive integers less
 * than or equal to n.
 * - For example, factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.
 *
 * We make a clumsy factorial using the integers in decreasing order by swapping out the
 * multiply operations for a fixed rotation of operations with multiply '*', divide '/',
 * add '+', and subtract '-' in this order.
 * - For example, clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.
 *
 * However, these operations are still applied using the usual order of operations of
 * arithmetic. We do all multiplication and division steps before any addition or
 * subtraction steps, and multiplication and division steps are processed left to right.
 *
 * Additionally, the division that we use is floor division such that 10 * 9 / 8 = 90 / 8 = 11.
 *
 * Given an integer n, return the clumsy factorial of n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function(n) {
  if (n <= 2) return n;
  if (n === 3) return 6;

  let result = Math.floor(n * (n - 1) / (n - 2)) + (n - 3);
  n -= 4;

  while (n >= 4) {
    result -= Math.floor(n * (n - 1) / (n - 2)) - (n - 3);
    n -= 4;
  }

  if (n === 3) result -= 6;
  else if (n === 2) result -= 2;
  else if (n === 1) result -= 1;

  return result;
};
