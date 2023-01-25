/**
 * 372. Super Pow
 * https://leetcode.com/problems/super-pow/
 * Difficulty: Medium
 *
 * Your task is to calculate ab mod 1337 where a is a positive integer and b
 * is an extremely large positive integer given in the form of an array.
 */

/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
  return helper(BigInt(a), BigInt(b.join('')), 1337n);
};

function helper(a, b, mod) {
  let r = 1n;

  while (b > 0n) {
    if (b % 2n == 1) {
      r = r * a % mod;
    }
    b >>= 1n;
    a = a * a % mod;
  }

  return Number(r);
};
