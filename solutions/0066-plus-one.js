/**
 * 66. Plus One
 * https://leetcode.com/problems/plus-one/
 * Difficulty: Easy
 *
 * Given a non-empty array of digits representing a non-negative integer,
 * plus one to the integer.
 *
 * The digits are stored such that the most significant digit is at the
 * head of the list, and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero,
 * except the number 0 itself.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i = digits.length - 1;
  digits[i] += 1;
  while (digits[i] > 9) {
    digits[i--] = 0;
    if (digits[i]) {
      digits[i] += 1;
    } else {
      digits.unshift(1);
    }
  }
  return digits;
};

// alternative one-liner that breaks the rules:
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  return String(BigInt(digits.join('')) + BigInt(1)).split('');
};
