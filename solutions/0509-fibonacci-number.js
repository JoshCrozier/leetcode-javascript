/**
 * 509. Fibonacci Number
 * https://leetcode.com/problems/fibonacci-number/
 * Difficulty: Easy
 *
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1. That is:
 * - F(0) = 0, F(1) = 1
 * - F(n) = F(n - 1) + F(n - 2), for n > 1.
 * Given n, calculate F(n).
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  const nums = [0, 1];

  for (let i = 2; i <= n; i++) {
    nums.push(nums[i - 2] + nums[i - 1]);
  }

  return nums[n];
};
