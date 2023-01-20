/**
 * 1323. Maximum 69 Number
 * https://leetcode.com/problems/maximum-69-number/
 * Difficulty: Easy
 *
 * Given a positive integer num consisting only of digits 6 and 9.
 *
 * Return the maximum number you can get by changing at most
 * one digit (6 becomes 9, and 9 becomes 6).
 */

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function(num) {
  return +String(num).replace(6, 9);
};
