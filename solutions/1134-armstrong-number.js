/**
 * 1134. Armstrong Number
 * https://leetcode.com/problems/armstrong-number/
 * Difficulty: Easy
 *
 * Given an integer n, return true if and only if it is an Armstrong number.
 *
 * The k-digit number n is an Armstrong number if and only if the kth power of each digit sums to n.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function(n) {
  const digits = n.toString();
  const digitCount = digits.length;
  const digitSum = digits
    .split('')
    .reduce((sum, digit) => sum + Math.pow(parseInt(digit, 10), digitCount), 0);

  return digitSum === n;
};
