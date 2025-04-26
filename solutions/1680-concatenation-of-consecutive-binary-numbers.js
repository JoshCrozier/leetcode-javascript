/**
 * 1680. Concatenation of Consecutive Binary Numbers
 * https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/
 * Difficulty: Medium
 *
 * Given an integer n, return the decimal value of the binary string formed by concatenating the
 * binary representations of 1 to n in order, modulo 109 + 7.
 */

/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
  const MOD = 1e9 + 7;
  let result = 0;

  for (let i = 1; i <= n; i++) {
    const bitLength = Math.floor(Math.log2(i)) + 1;
    result = ((result * (1 << bitLength)) % MOD + i) % MOD;
  }

  return result;
};
