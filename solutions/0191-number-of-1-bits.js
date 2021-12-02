/**
 * 191. Number of 1 Bits
 * https://leetcode.com/problems/number-of-1-bits/
 * Difficulty: Easy
 *
 * Write a function that takes an unsigned integer and returns the number of
 * '1' bits it has (also known as the Hamming weight).
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  return n.toString(2).match(/1/g)?.length || 0;
};
