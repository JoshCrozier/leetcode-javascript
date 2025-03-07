/**
 * 2523. Closest Prime Numbers in Range
 * https://leetcode.com/problems/closest-prime-numbers-in-range/
 * Difficulty: Medium
 *
 * Given two positive integers left and right, find the two integers num1 and num2 such that:
 * - left <= num1 < num2 <= right
 * - Both num1 and num2 are prime numbers.
 * - num2 - num1 is the minimum amongst all other pairs satisfying the above conditions.
 *
 * Return the positive integer array ans = [num1, num2]. If there are multiple pairs satisfying
 * these conditions, return the one with the smallest num1 value. If no such numbers exist,
 * return [-1, -1].
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
  const group = new Uint8Array(right + 1).fill(1);
  let result = [-1, -1];

  group[0] = group[1] = 0;
  for (let i = 2; i * i <= right; i++) {
    if (group[i]) {
      for (let j = i * i; j <= right; j += i) {
        group[j] = 0;
      }
    }
  }
  for (let i = Math.max(2, left), prev = -1, min = Infinity; i <= right; i++) {
    if (group[i]) {
      if (prev !== -1 && i - prev < min) {
        min = i - prev;
        result = [prev, i];
      }
      prev = i;
    }
  }

  return result;
};
