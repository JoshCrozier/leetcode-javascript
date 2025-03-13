/**
 * 738. Monotone Increasing Digits
 * https://leetcode.com/problems/monotone-increasing-digits/
 * Difficulty: Medium
 *
 * An integer has monotone increasing digits if and only if each pair of adjacent digits
 * x and y satisfy x <= y.
 *
 * Given an integer n, return the largest number that is less than or equal to n with
 * monotone increasing digits.
 */

/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
  const digits = String(n).split('').map(Number);
  let offset = digits.length;

  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i - 1] > digits[i]) {
      offset = i;
      digits[i - 1]--;
    }
  }

  for (let i = offset; i < digits.length; i++) {
    digits[i] = 9;
  }

  return +digits.join('');
};
