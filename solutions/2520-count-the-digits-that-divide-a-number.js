/**
 * 2520. Count the Digits That Divide a Number
 * https://leetcode.com/problems/count-the-digits-that-divide-a-number/
 * Difficulty: Easy
 *
 * Given an integer num, return the number of digits in num that divide num.
 *
 * An integer val divides nums if nums % val == 0.
 */

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
  let result = 0;
  let n = num;

  while (n > 0) {
    if (num % (n % 10) === 0) result++;
    n = Math.floor(n / 10);
  }

  return result;
};
