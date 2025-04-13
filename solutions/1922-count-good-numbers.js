/**
 * 1922. Count Good Numbers
 * https://leetcode.com/problems/count-good-numbers/
 * Difficulty: Medium
 *
 * A digit string is good if the digits (0-indexed) at even indices are even and the digits
 * at odd indices are prime (2, 3, 5, or 7).
 *
 * For example, "2582" is good because the digits (2 and 8) at even positions are even and
 * the digits (5 and 2) at odd positions are prime. However, "3245" is not good because 3
 * is at an even index but is not even.
 *
 * Given an integer n, return the total number of good digit strings of length n. Since the
 * answer may be large, return it modulo 109 + 7.
 *
 * A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
  const MOD = 1e9 + 7;
  const evenCount = 5;
  const primeCount = 4;
  const evenPositions = Math.ceil(n / 2);
  const oddPositions = Math.floor(n / 2);
  const evenResult = power(evenCount, evenPositions);
  const oddResult = power(primeCount, oddPositions);

  return Number(BigInt(evenResult) * BigInt(oddResult) % BigInt(MOD));

  function power(base, exponent) {
    if (exponent === 0) return 1;
    let half = power(base, Math.floor(exponent / 2));
    half = BigInt(half) * BigInt(half) % BigInt(MOD);
    if (exponent % 2) half = half * BigInt(base) % BigInt(MOD);
    return Number(half);
  }
};
