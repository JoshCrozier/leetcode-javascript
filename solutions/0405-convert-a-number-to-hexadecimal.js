/**
 * 405. Convert a Number to Hexadecimal
 * https://leetcode.com/problems/convert-a-number-to-hexadecimal/
 * Difficulty: Easy
 *
 * Given an integer num, return a string representing its hexadecimal
 * representation. For negative integers, two’s complement method is used.
 *
 * All the letters in the answer string should be lowercase characters,
 * and there should not be any leading zeros in the answer except for
 * the zero itself.
 *
 * Note: You are not allowed to use any built-in library method to directly
 * solve this problem.
 */

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (num === 0) {
    return num.toString();
  }
  const words = '0123456789abcdef';
  let result = '';
  while (num !== 0) {
    result = words[num & 0xf] + result;
    num >>>= 4;
  }
  return result;
};
