/**
 * 1952. Three Divisors
 * https://leetcode.com/problems/three-divisors/
 * Difficulty: Easy
 *
 * Given an integer n, return true if n has exactly three positive divisors. Otherwise,
 * return false.
 *
 * An integer m is a divisor of n if there exists an integer k such that n = k * m.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
  let divisorCount = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisorCount++;
      if (divisorCount > 3) return false;
    }
  }

  return divisorCount === 3;
};
