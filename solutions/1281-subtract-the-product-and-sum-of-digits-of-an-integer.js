/**
 * 1281. Subtract the Product and Sum of Digits of an Integer
 * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 * Difficulty: Easy
 *
 * Given an integer number n, return the difference between the product of its digits and
 * the sum of its digits.
 */

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let product = 1;
  let sum = 0;

  while (n > 0) {
    const digit = n % 10;
    product *= digit;
    sum += digit;
    n = Math.floor(n / 10);
  }

  return product - sum;
};
