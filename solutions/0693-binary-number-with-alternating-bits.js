/**
 * 693. Binary Number with Alternating Bits
 * https://leetcode.com/problems/binary-number-with-alternating-bits/
 * Difficulty: Easy
 *
 * Given a positive integer, check whether it has alternating bits: namely, if two adjacent
 * bits will always have different values.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  for (let i = 1, b = n.toString(2); i < b.length; i++) {
    if (b[i - 1] === b[i]) return false;
  }
  return true;
};
