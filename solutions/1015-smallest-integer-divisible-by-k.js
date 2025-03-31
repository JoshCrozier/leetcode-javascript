/**
 * 1015. Smallest Integer Divisible by K
 * https://leetcode.com/problems/smallest-integer-divisible-by-k/
 * Difficulty: Medium
 *
 * Given a positive integer k, you need to find the length of the smallest positive integer n such
 * that n is divisible by k, and n only contains the digit 1.
 *
 * Return the length of n. If there is no such n, return -1.
 *
 * Note: n may not fit in a 64-bit signed integer.
 */

/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
  if (k % 2 === 0 || k % 5 === 0) return -1;
  let remainder = 0;
  let length = 1;

  while (length <= k) {
    remainder = (remainder * 10 + 1) % k;
    if (remainder === 0) return length;
    length++;
  }

  return -1;
};
