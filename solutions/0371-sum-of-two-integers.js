/**
 * 371. Sum of Two Integers
 * https://leetcode.com/problems/sum-of-two-integers/
 * Difficulty: Medium
 *
 * Given two integers a and b, return the sum of the two integers
 * without using the operators + and -.
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  const sum = a ^ b;
  const carry = (a & b) << 1;

  if (!carry) {
    return sum;
  }

  return getSum(sum, carry);
};
