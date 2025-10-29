/**
 * 3370. Smallest Number With All Set Bits
 * https://leetcode.com/problems/smallest-number-with-all-set-bits/
 * Difficulty: Easy
 *
 * You are given a positive number n.
 *
 * Return the smallest number x greater than or equal to n, such that the binary
 * representation of x contains only set bits
 */

/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
  const bits = n.toString(2).length;
  const result = (1 << bits) - 1;
  return result >= n ? result : (1 << (bits + 1)) - 1;
};
