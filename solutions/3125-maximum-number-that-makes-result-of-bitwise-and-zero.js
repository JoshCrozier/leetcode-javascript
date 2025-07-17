/**
 * 3125. Maximum Number That Makes Result of Bitwise AND Zero
 * https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/
 * Difficulty: Medium
 *
 * Given an integer n, return the maximum integer x such that x <= n, and the bitwise AND of
 * all the numbers in the range [x, n] is 0.
 */

/**
 * @param {number} n
 * @return {number}
 */
var maxNumber = function(n) {
  let bit = 1;

  while (bit <= n) {
    bit *= 2;
  }

  return bit / 2 - 1;
};
