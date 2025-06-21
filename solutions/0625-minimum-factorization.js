/**
 * 625. Minimum Factorization
 * https://leetcode.com/problems/minimum-factorization/
 * Difficulty: Medium
 *
 * Given a positive integer num, return the smallest positive integer x whose multiplication
 * of each digit equals num. If there is no answer or the answer is not fit in 32-bit signed
 * integer, return 0.
 */

/**
 * @param {number} num
 * @return {number}
 */
var smallestFactorization = function(num) {
  if (num < 2) return num;

  const digits = [];
  for (let divisor = 9; divisor > 1; divisor--) {
    while (num % divisor === 0) {
      digits.push(divisor);
      num /= divisor;
    }
  }

  if (num > 1) return 0;

  let result = 0;
  for (const digit of digits.reverse()) {
    result = result * 10 + digit;
    if (result > 2**31 - 1) return 0;
  }

  return result;
};
