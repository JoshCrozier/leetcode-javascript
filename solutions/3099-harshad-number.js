/**
 * 3099. Harshad Number
 * https://leetcode.com/problems/harshad-number/
 * Difficulty: Easy
 *
 * An integer divisible by the sum of its digits is said to be a Harshad number. You are given
 * an integer x. Return the sum of the digits of x if x is a Harshad number, otherwise, return -1.
 */

/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
  let digitSum = 0;
  let num = x;
  while (num > 0) {
    digitSum += num % 10;
    num = Math.floor(num / 10);
  }
  return x % digitSum === 0 ? digitSum : -1;
};
