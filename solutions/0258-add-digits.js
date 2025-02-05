/**
 * 258. Add Digits
 * https://leetcode.com/problems/add-digits/
 * Difficulty: Easy
 *
 * Given an integer num, repeatedly add all its digits until
 * the result has only one digit, and return it.
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return num < 10 ? num : num % 9 === 0 ? 9 : num % 9;
};
