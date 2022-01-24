/**
 * 204. Count Primes
 * https://leetcode.com/problems/count-primes/
 * Difficulty: Medium
 *
 * Given an integer n, return the number of prime numbers that are strictly less than n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const nonPrimes = [];
  let result = 0;
  for (let i = 2; i < n; i++) {
    if (!nonPrimes[i]) {
      result++;
      for (let j = 2; i * j < n; j++) {
        nonPrimes[i * j] = 1;
      }
    }
  }
  return result;
};
