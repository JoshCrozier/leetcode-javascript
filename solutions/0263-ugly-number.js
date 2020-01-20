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
  for (let i of [2, 3, 5]) {
    while (num && num % i === 0) num /= i;
  }
  return num === 1;
};
