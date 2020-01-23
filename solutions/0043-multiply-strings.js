/**
 * 43. Multiply Strings
 * https://leetcode.com/problems/multiply-strings/
 * Difficulty: Medium
 *
 * Given two non-negative integers num1 and num2 represented as strings,
 * return the product of num1 and num2, also represented as a string.
 *
 * - The length of both num1 and num2 is < 110.
 * - Both num1 and num2 contain only digits 0-9.
 * - Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 * - You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const result = new Array(num1.length + num2.length).fill(0);
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const sum = num1[i] * num2[j] + result[i + j + 1];
      result[i + j] += Math.floor(sum / 10);
      result[i + j + 1] = sum % 10;
    }
  }
  return result.join('').replace(/^0+(?!$)/, '');
};

// one-liner alternative that breaks the rules:
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  return ((BigInt(num1) * BigInt(num2))).toString();
};
