/**
 * 2803. Factorial Generator
 * https://leetcode.com/problems/factorial-generator/
 * Difficulty: Easy
 *
 * Write a generator function that takes an integer n as an argument and returns a generator
 * object which yields the factorial sequence.
 *
 * The factorial sequence is defined by the relation n! = n * (n-1) * (n-2) * ... * 2 * 1.
 *
 * The factorial of 0 is defined as 1.
 */

/**
 * @param {number} n
 * @yields {number}
 */
function* factorial(n) {
  let currentFactorial = 1;

  for (let i = 1; i <= n; i++) {
    currentFactorial *= i;
    yield currentFactorial;
  }

  if (n === 0) {
    yield 1;
  }
}
