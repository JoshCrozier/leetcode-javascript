/**
 * 2729. Check if The Number is Fascinating
 * https://leetcode.com/problems/check-if-the-number-is-fascinating/
 * Difficulty: Easy
 *
 * You are given an integer n that consists of exactly 3 digits.
 *
 * We call the number n fascinating if, after the following modification, the resulting number
 * contains all the digits from 1 to 9 exactly once and does not contain any 0's:
 * - Concatenate n with the numbers 2 * n and 3 * n.
 *
 * Return true if n is fascinating, or false otherwise.
 *
 * Concatenating two numbers means joining them together. For example, the concatenation of 121
 * and 371 is 121371.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
  const concatenated = `${n}${2 * n}${3 * n}`;
  const digitSet = new Set(concatenated);
  return concatenated.length === 9 && digitSet.size === 9 && !digitSet.has('0');
};
