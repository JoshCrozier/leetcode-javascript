/**
 * 415. Add Strings
 * https://leetcode.com/problems/add-strings/
 * Difficulty: Easy
 *
 * Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and
 * num2 as a string.
 *
 * You must solve the problem without using any built-in library for handling large integers (such
 * as BigInteger). You must also not convert the inputs to integers directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let result = '';

  for (let i = num1.length - 1, j = num2.length - 1, carry = 0; i > -1 || j > -1 || carry === 1;) {
    if (i > -1) {
      carry += num1.charCodeAt(i--) - 48;
    }
    if (j > -1) {
      carry += num2.charCodeAt(j--) - 48;
    }
    result = (carry % 10) + result;
    carry = Math.floor(carry / 10);
  }

  return result;
};
