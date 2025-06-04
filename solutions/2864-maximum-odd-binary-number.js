/**
 * 2864. Maximum Odd Binary Number
 * https://leetcode.com/problems/maximum-odd-binary-number/
 * Difficulty: Easy
 *
 * You are given a binary string s that contains at least one '1'.
 *
 * You have to rearrange the bits in such a way that the resulting binary number is the maximum
 * odd binary number that can be created from this combination.
 *
 * Return a string representing the maximum odd binary number that can be created from the given
 * combination.
 *
 * Note that the resulting string can have leading zeros.
 */

/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
  let ones = 0;
  for (const bit of s) {
    if (bit === '1') ones++;
  }
  return '1'.padStart(ones, '1').padEnd(s.length, '0').slice(1) + '1';
};
