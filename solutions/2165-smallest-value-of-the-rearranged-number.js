/**
 * 2165. Smallest Value of the Rearranged Number
 * https://leetcode.com/problems/smallest-value-of-the-rearranged-number/
 * Difficulty: Medium
 *
 * You are given an integer num. Rearrange the digits of num such that its value is minimized
 * and it does not contain any leading zeros.
 *
 * Return the rearranged number with minimal value.
 *
 * Note that the sign of the number does not change after rearranging the digits.
 */

/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function(num) {
  const isNegative = num < 0;
  const digits = Math.abs(num).toString().split('').map(Number);

  if (isNegative) {
    digits.sort((a, b) => b - a);
    return -parseInt(digits.join(''), 10);
  }

  digits.sort((a, b) => a - b);
  const firstNonZero = digits.findIndex(d => d !== 0);

  if (firstNonZero === -1) return 0;

  [digits[0], digits[firstNonZero]] = [digits[firstNonZero], digits[0]];
  return parseInt(digits.join(''), 10);
};
