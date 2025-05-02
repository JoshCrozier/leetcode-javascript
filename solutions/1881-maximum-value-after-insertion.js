/**
 * 1881. Maximum Value after Insertion
 * https://leetcode.com/problems/maximum-value-after-insertion/
 * Difficulty: Medium
 *
 * You are given a very large integer n, represented as a string, and an integer digit x.
 * The digits in n and the digit x are in the inclusive range [1, 9], and n may represent
 * a negative number.
 *
 * You want to maximize n's numerical value by inserting x anywhere in the decimal representation
 * of n. You cannot insert x to the left of the negative sign.
 * - For example, if n = 73 and x = 6, it would be best to insert it between 7 and 3, making
 *   n = 763.
 * - If n = -55 and x = 2, it would be best to insert it before the first 5, making n = -255.
 *
 * Return a string representing the maximum value of n after the insertion.
 */

/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function(n, x) {
  const isNegative = n[0] === '-';
  const digits = n.slice(isNegative ? 1 : 0);
  let result = '';

  if (isNegative) {
    for (let i = 0; i <= digits.length; i++) {
      if (i === digits.length || x < parseInt(digits[i])) {
        result = '-' + digits.slice(0, i) + x + digits.slice(i);
        break;
      }
    }
  } else {
    for (let i = 0; i <= digits.length; i++) {
      if (i === digits.length || x > parseInt(digits[i])) {
        result = digits.slice(0, i) + x + digits.slice(i);
        break;
      }
    }
  }

  return result;
};
