/**
 * 190. Reverse Bits
 * https://leetcode.com/problems/reverse-bits/
 * Difficulty: Easy
 *
 * Reverse bits of a given 32 bits unsigned integer.
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  return parseInt([...n.toString(2)].reverse().join('').padEnd(32, '0'), 2);
};
