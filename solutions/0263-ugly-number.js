/**
 * 263. Ugly Number
 * https://leetcode.com/problems/ugly-number/
 * Difficulty: Easy
 *
 * Write a program to check whether a given number is an ugly number.
 *
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num < 1) return false;
  while (num % 5 === 0) num /= 5;
  while (num % 3 === 0) num /= 3;
  while (num % 2 === 0) num /= 2;
  return num === 1;
};
