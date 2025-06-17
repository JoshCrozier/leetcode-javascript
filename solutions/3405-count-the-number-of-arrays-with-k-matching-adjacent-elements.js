/**
 * 3405. Count the Number of Arrays with K Matching Adjacent Elements
 * https://leetcode.com/problems/count-the-number-of-arrays-with-k-matching-adjacent-elements/
 * Difficulty: Hard
 *
 * You are given three integers n, m, k. A good array arr of size n is defined as follows:
 * - Each element in arr is in the inclusive range [1, m].
 * - Exactly k indices i (where 1 <= i < n) satisfy the condition arr[i - 1] == arr[i].
 *
 * Return the number of good arrays that can be formed.
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var countGoodArrays = function(n, m, k) {
  const MOD = 1e9 + 7;

  if (m === 1) {
    return k === n - 1 ? 1 : 0;
  }

  const choose = binomialCoeff(n - 1, k);
  const power = modPow(m - 1, n - 1 - k, MOD);
  const result = Number((BigInt(choose) * BigInt(m) * BigInt(power)) % BigInt(MOD));

  return result;

  function modPow(base, exp, mod) {
    let result = 1n;
    base = ((BigInt(base) % BigInt(mod)) + BigInt(mod)) % BigInt(mod);
    exp = BigInt(exp);
    mod = BigInt(mod);

    while (exp > 0n) {
      if (exp & 1n) result = (result * base) % mod;
      base = (base * base) % mod;
      exp >>= 1n;
    }
    return Number(result);
  }

  function modInverse(a, mod) {
    return modPow(a, mod - 2, mod);
  }

  function binomialCoeff(n, k) {
    if (k > n || k < 0) return 0;
    if (k === 0 || k === n) return 1;

    if (k > n - k) k = n - k;

    let numerator = 1n;
    let denominator = 1n;

    for (let i = 0; i < k; i++) {
      numerator = (numerator * BigInt(n - i)) % BigInt(MOD);
      denominator = (denominator * BigInt(i + 1)) % BigInt(MOD);
    }

    const invDenom = modInverse(Number(denominator), MOD);
    return Number((numerator * BigInt(invDenom)) % BigInt(MOD));
  }
};
