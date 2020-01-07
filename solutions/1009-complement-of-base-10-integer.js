/**
 * 1009. Complement of Base 10 Integer
 * https://leetcode.com/problems/complement-of-base-10-integer/
 * Difficulty: Easy
 *
 * Every non-negative integer N has a binary representation.
 * For example, 5 can be represented as "101" in binary,
 * 11 as "1011" in binary, and so on.  Note that except for
 * N = 0, there are no leading zeroes in any binary representation.
 *
 * The complement of a binary representation is the number in binary
 * you get when changing every 1 to a 0 and 0 to a 1. For example,
 * the complement of "101" in binary is "010" in binary.
 *
 * For a given number N in base-10, return the complement of it's
 * binary representation as a base-10 integer.
 */

/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  return parseInt(N.toString(2).split('').map(n => n ^ 1).join(''), 2);
};
