/**
 * 2429. Minimize XOR
 * https://leetcode.com/problems/minimize-xor/
 * Difficulty: Medium
 *
 * Given two positive integers num1 and num2, find the positive integer x such that:
 * - x has the same number of set bits as num2, and
 * - The value x XOR num1 is minimal.
 *
 * Note that XOR is the bitwise XOR operation.
 *
 * Return the integer x. The test cases are generated such that x is uniquely determined.
 *
 * The number of set bits of an integer is the number of 1's in its binary representation.
 */

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function(num1, num2) {
  let count1 = num1.toString(2).split('1').length - 1;
  const count2 = num2.toString(2).split('1').length - 1;

  while (count1 > count2) {
    num1 &= (num1 - 1);
    count1--;
  }

  while (count1 < count2) {
    num1 |= (num1 + 1);
    count1++;
  }

  return num1;
};
