/**
 * 1175. Prime Arrangements
 * https://leetcode.com/problems/prime-arrangements/
 * Difficulty: Easy
 *
 * Return the number of permutations of 1 to n so that prime numbers are at prime
 * indices (1-indexed.)
 *
 * (Recall that an integer is prime if and only if it is greater than 1, and cannot be written
 * as a product of two positive integers both smaller than it.)
 *
 * Since the answer may be large, return the answer modulo 10^9 + 7.
 */

/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
  let primeCount = 0;
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) primeCount++;
  }

  const MOD = 1000000007n;
  const nonPrimeCount = n - primeCount;
  const primePermutations = factorial(primeCount);
  const nonPrimePermutations = factorial(nonPrimeCount);

  return Number((primePermutations * nonPrimePermutations) % MOD);

  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function factorial(n) {
    let product = 1n;
    for (let i = 2; i <= n; i++) {
      product *= BigInt(i);
    }
    return product;
  }
};
