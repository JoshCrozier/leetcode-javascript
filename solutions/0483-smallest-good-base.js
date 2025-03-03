/**
 * 483. Smallest Good Base
 * https://leetcode.com/problems/smallest-good-base/
 * Difficulty: Hard
 *
 * Given an integer n represented as a string, return the smallest good base of n.
 *
 * We call k >= 2 a good base of n, if all digits of n base k are 1's.
 */

/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function(n) {
  const num = BigInt(n);
  for (let m = Math.floor(Math.log2(Number(n))); m >= 1; m--) {
    const k = BigInt(Math.floor(Number(n) ** (1 / m)));
    if (k < 2n) continue;
    const sum = (k ** BigInt(m + 1) - 1n) / (k - 1n);
    if (sum === num) return k.toString();
  }
  return (num - 1n).toString();
};
