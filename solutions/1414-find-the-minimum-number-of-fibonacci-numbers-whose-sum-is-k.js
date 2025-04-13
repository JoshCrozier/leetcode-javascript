/**
 * 1414. Find the Minimum Number of Fibonacci Numbers Whose Sum Is K
 * https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/
 * Difficulty: Medium
 *
 * Given an integer k, return the minimum number of Fibonacci numbers whose sum is equal to k.
 * The same Fibonacci number can be used multiple times.
 *
 * The Fibonacci numbers are defined as:
 * - F1 = 1
 * - F2 = 1
 * - Fn = Fn-1 + Fn-2 for n > 2.
 *
 * It is guaranteed that for the given constraints we can always find such Fibonacci numbers
 * that sum up to k.
 */

/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
  const fibonacci = [1, 1];
  while (fibonacci[fibonacci.length - 1] <= k) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
  }

  let count = 0;
  let remaining = k;

  for (let i = fibonacci.length - 1; i >= 0 && remaining > 0; i--) {
    while (fibonacci[i] <= remaining) {
      remaining -= fibonacci[i];
      count++;
    }
  }

  return count;
};
