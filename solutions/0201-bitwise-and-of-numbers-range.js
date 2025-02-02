/**
 * 201. Bitwise AND of Numbers Range
 * https://leetcode.com/problems/bitwise-and-of-numbers-range/
 * Difficulty: Medium
 *
 * Given two integers left and right that represent the range [left, right], return the
 * bitwise AND of all numbers in this range, inclusive.
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
  let count = 0;
  while (left !== right) {
    left >>= 1;
    right >>= 1;
    count++;
  }
  return left << count;
};
