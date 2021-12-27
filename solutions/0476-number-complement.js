/**
 * 476. Number Complement
 * https://leetcode.com/problems/number-complement/
 * Difficulty: Easy
 *
 * The complement of an integer is the integer you get when you flip all the 0's to 1's
 * and all the 1's to 0's in its binary representation.
 *
 * For example, The integer 5 is "101" in binary and its complement is "010" which is
 * the integer 2.
 *
 * Given an integer num, return its complement.
 */

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  return parseInt(num.toString(2).split('').map(n => 1 - n).join(''), 2);
};
