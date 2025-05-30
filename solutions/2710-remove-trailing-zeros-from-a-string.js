/**
 * 2710. Remove Trailing Zeros From a String
 * https://leetcode.com/problems/remove-trailing-zeros-from-a-string/
 * Difficulty: Easy
 *
 * Given a positive integer num represented as a string, return the integer num without
 * trailing zeros as a string.
 */

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
  return num.replace(/0+$/g, '');
};
