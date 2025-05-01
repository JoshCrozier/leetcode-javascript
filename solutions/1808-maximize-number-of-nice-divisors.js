/**
 * 1808. Maximize Number of Nice Divisors
 * https://leetcode.com/problems/maximize-number-of-nice-divisors/
 * Difficulty: Hard
 *
 * You are given a positive integer primeFactors. You are asked to construct a positive
 * integer n that satisfies the following conditions:
 * - The number of prime factors of n (not necessarily distinct) is at most primeFactors.
 * - The number of nice divisors of n is maximized. Note that a divisor of n is nice if it
 *   is divisible by every prime factor of n. For example, if n = 12, then its prime factors
 *   are [2,2,3], then 6 and 12 are nice divisors, while 3 and 4 are not.
 *
 * Return the number of nice divisors of n. Since that number can be too large, return it
 * modulo 109 + 7.
 *
 * Note that a prime number is a natural number greater than 1 that is not a product of two
 * smaller natural numbers. The prime factors of a number n is a list of prime numbers such
 * that their product equals n.
 */

/**
 * @param {number} primeFactors
 * @return {number}
 */
var maxNiceDivisors = function(primeFactors) {
  const MOD = 1e9 + 7;

  if (primeFactors <= 3) return primeFactors;

  const quotient = Math.floor(primeFactors / 3);
  const remainder = primeFactors % 3;

  if (remainder === 0) return power(3, quotient);
  if (remainder === 1) return (power(3, quotient - 1) * 4) % MOD;

  return (power(3, quotient) * 2) % MOD;

  function power(base, exponent) {
    let result = BigInt(1);
    base = BigInt(base);
    while (exponent > 0) {
      if (exponent & 1) result = (result * base) % BigInt(MOD);
      base = (base * base) % BigInt(MOD);
      exponent >>= 1;
    }
    return Number(result);
  }
};
