/**
 * 878. Nth Magical Number
 * https://leetcode.com/problems/nth-magical-number/
 * Difficulty: Hard
 *
 * A positive integer is magical if it is divisible by either a or b.
 *
 * Given the three integers n, a, and b, return the nth magical number. Since the answer may be
 * very large, return it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 */
var nthMagicalNumber = function(n, a, b) {
  const MOD = 1e9 + 7;
  const lcm = (a * b) / gcd(a, b);
  const cycleNumbers = lcm / a + lcm / b - 1;
  const cycles = Math.floor(n / cycleNumbers);
  const remainder = n % cycleNumbers;

  const result = (cycles * lcm) % MOD;
  if (remainder === 0) return result;

  let left = 1;
  let right = lcm;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const count = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / lcm);
    if (count < remainder) left = mid + 1;
    else right = mid;
  }

  return (result + left) % MOD;

  function gcd(x, y) {
    return y === 0 ? x : gcd(y, x % y);
  }
};
