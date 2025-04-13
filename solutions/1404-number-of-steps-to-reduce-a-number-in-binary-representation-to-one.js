/**
 * 1404. Number of Steps to Reduce a Number in Binary Representation to One
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/
 * Difficulty: Medium
 *
 * Given the binary representation of an integer as a string s, return the number of steps to reduce
 * it to 1 under the following rules:
 * - If the current number is even, you have to divide it by 2.
 * - If the current number is odd, you have to add 1 to it.
 *
 * It is guaranteed that you can always reach one for all test cases.
 */

/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
  let num = BigInt(`0b${s}`);
  let steps = 0;

  while (num !== 1n) {
    if (num % 2n === 0n) {
      num /= 2n;
    } else {
      num += 1n;
    }
    steps++;
  }

  return steps;
};
