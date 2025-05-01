/**
 * 1837. Sum of Digits in Base K
 * https://leetcode.com/problems/sum-of-digits-in-base-k/
 * Difficulty: Easy
 *
 * Given an integer n (in base 10) and a base k, return the sum of the digits of n after
 * converting n from base 10 to base k.
 *
 * After converting, each digit should be interpreted as a base 10 number, and the sum should
 * be returned in base 10.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
  let digitSum = 0;

  while (n > 0) {
    digitSum += n % k;
    n = Math.floor(n / k);
  }

  return digitSum;
};
