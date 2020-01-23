/**
 * 67. Add Binary
 * https://leetcode.com/problems/add-binary/
 * Difficulty: Easy
 *
 * Given two binary strings, return their sum (also a binary string).
 *
 * The input strings are both non-empty and contains only characters 1 or 0.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
};
