/**
 * 2894. Divisible and Non-divisible Sums Difference
 * https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/
 * Difficulty: Easy
 *
 * You are given positive integers n and m.
 *
 * Define two integers as follows:
 * - num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
 * - num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.
 *
 * Return the integer num1 - num2.
 */

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
  let nonDivisibleSum = 0;
  let divisibleSum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      divisibleSum += i;
    } else {
      nonDivisibleSum += i;
    }
  }

  return nonDivisibleSum - divisibleSum;
};
