/**
 * 1201. Ugly Number III
 * https://leetcode.com/problems/ugly-number-iii/
 * Difficulty: Medium
 *
 * An ugly number is a positive integer that is divisible by a, b, or c.
 *
 * Given four integers n, a, b, and c, return the nth ugly number.
 */

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
  const ab = lcm(a, b);
  const bc = lcm(b, c);
  const ac = lcm(a, c);
  const abc = lcm(ab, c);
  let left = 1;
  let right = 2 * 10**9;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (countUgly(mid) < n) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;

  function lcm(x, y) {
    return (x * y) / gcd(x, y);
  }

  function gcd(x, y) {
    return y === 0 ? x : gcd(y, x % y);
  }

  function countUgly(num) {
    return Math.floor(num / a) + Math.floor(num / b) + Math.floor(num / c)
      - Math.floor(num / ab) - Math.floor(num / bc) - Math.floor(num / ac)
      + Math.floor(num / abc);
  }
};
