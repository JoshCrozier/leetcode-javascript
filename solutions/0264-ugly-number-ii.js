/**
 * 264. Ugly Number II
 * https://leetcode.com/problems/ugly-number-ii/
 * Difficulty: Medium
 *
 * Write a program to find the n-th ugly number.
 *
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 */

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n, factors = [2, 3, 5], offsets = [0, 0, 0]) {
  const numbers = [1];
  while (numbers.length < n) {
    const candidates = factors.map((v, i) => numbers[offsets[i]] * v);
    const target = Math.min(...candidates);
    candidates.forEach((c, i) => target === c ? offsets[i]++ : null);
    numbers.push(target)
  }
  return numbers[n - 1];
};
