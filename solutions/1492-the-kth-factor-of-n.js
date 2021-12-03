/**
 * 1492. The kth Factor of n
 * https://leetcode.com/problems/the-kth-factor-of-n/
 * Difficulty: Medium
 *
 * Given two positive integers n and k.
 *
 * A factor of an integer n is defined as an integer i where n % i == 0.
 *
 * Consider a list of all factors of n sorted in ascending order, return
 * the kth factor in this list or return -1 if n has less than k factors.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      k--;
    }
    if (!k) return i;
  }
  return -1;
};
