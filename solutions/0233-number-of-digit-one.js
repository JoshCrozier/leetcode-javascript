/**
 * 233. Number of Digit One
 * https://leetcode.com/problems/number-of-digit-one/
 * Difficulty: Hard
 *
 * Given an integer n, count the total number of digit 1 appearing in all non-negative
 * integers less than or equal to n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  if (n <= 0) {
    return 0;
  } else if (n < 10) {
    return 1;
  }

  const base = 10 ** (n.toString().length - 1);
  const answer = parseInt(n / base);

  return countDigitOne(base - 1) * answer
    + (answer === 1 ? (n - base + 1) : base) + countDigitOne(n % base);
};
