/**
 * 1963. Minimum Number of Swaps to Make the String Balanced
 * https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/
 * Difficulty: Medium
 *
 * You are given a 0-indexed string s of even length n. The string consists of exactly n / 2 opening
 * brackets '[' and n / 2 closing brackets ']'.
 *
 * A string is called balanced if and only if:
 * - It is the empty string, or
 * - It can be written as AB, where both A and B are balanced strings, or
 * - It can be written as [C], where C is a balanced string.
 *
 * You may swap the brackets at any two indices any number of times.
 *
 * Return the minimum number of swaps to make s balanced.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
  let imbalance = 0;
  let maxImbalance = 0;

  for (const bracket of s) {
    if (bracket === '[') {
      imbalance--;
    } else {
      imbalance++;
      maxImbalance = Math.max(maxImbalance, imbalance);
    }
  }

  return Math.ceil(maxImbalance / 2);
};
