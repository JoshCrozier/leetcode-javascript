/**
 * 2507. Smallest Value After Replacing With Sum of Prime Factors
 * https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/
 * Difficulty: Medium
 *
 * You are given a positive integer n.
 *
 * Continuously replace n with the sum of its prime factors.
 * - Note that if a prime factor divides n multiple times, it should be included in the sum as many
 *   times as it divides n.
 *
 * Return the smallest value n will take on.
 */

/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function(n) {
  while (true) {
    const next = sumPrimeFactors(n);
    if (next === n) return n;
    n = next;
  }

  function sumPrimeFactors(num) {
    let sum = 0;
    for (let i = 2; i * i <= num; i++) {
      while (num % i === 0) {
        sum += i;
        num /= i;
      }
    }
    if (num > 1) sum += num;
    return sum;
  }
};
