/**
 * 1447. Simplified Fractions
 * https://leetcode.com/problems/simplified-fractions/
 * Difficulty: Medium
 *
 * Given an integer n, return a list of all simplified fractions between 0 and 1
 * (exclusive) such that the denominator is less-than-or-equal-to n. The
 * fractions can be in any order.
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
  const gcd = (a, b) => !b ? a : gcd(b, a % b);
  const result = [];

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (gcd(i, j) === 1) {
        result.push(`${j}/${i}`);
      }
    }
  }

  return result;
};
