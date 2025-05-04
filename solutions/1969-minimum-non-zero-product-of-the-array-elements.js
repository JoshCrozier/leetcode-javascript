/**
 * 1969. Minimum Non-Zero Product of the Array Elements
 * https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/
 * Difficulty: Medium
 *
 * You are given a positive integer p. Consider an array nums (1-indexed) that consists of the
 * integers in the inclusive range [1, 2p - 1] in their binary representations. You are allowed
 * to do the following operation any number of times:
 * - Choose two elements x and y from nums.
 * - Choose a bit in x and swap it with its corresponding bit in y. Corresponding bit refers to
 *   the bit that is in the same position in the other integer.
 *
 * For example, if x = 1101 and y = 0011, after swapping the 2nd bit from the right, we have
 * x = 1111 and y = 0001.
 *
 * Find the minimum non-zero product of nums after performing the above operation any number
 * of times. Return this product modulo 109 + 7.
 *
 * Note: The answer should be the minimum product before the modulo operation is done.
 */

/**
 * @param {number} p
 * @return {number}
 */
var minNonZeroProduct = function(p) {
  const MOD = 1000000007n;
  const maxVal = (1n << BigInt(p)) - 1n;
  const halfCount = (maxVal - 1n) / 2n;
  const base = maxVal - 1n;

  function pow(base, exp, mod) {
    let result = 1n;
    base = base % mod;
    while (exp > 0n) {
      if (exp & 1n) result = (result * base) % mod;
      base = (base * base) % mod;
      exp >>= 1n;
    }
    return result;
  }

  return Number((maxVal * pow(base, halfCount, MOD)) % MOD);
};
