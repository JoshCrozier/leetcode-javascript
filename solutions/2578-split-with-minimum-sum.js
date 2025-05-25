/**
 * 2578. Split With Minimum Sum
 * https://leetcode.com/problems/split-with-minimum-sum/
 * Difficulty: Easy
 *
 * Given a positive integer num, split it into two non-negative integers num1 and num2 such that:
 * - The concatenation of num1 and num2 is a permutation of num.
 *   - In other words, the sum of the number of occurrences of each digit in num1 and num2 is equal
 *     to the number of occurrences of that digit in num.
 * - num1 and num2 can contain leading zeros.
 *
 * Return the minimum possible sum of num1 and num2.
 *
 * Notes:
 * - It is guaranteed that num does not contain any leading zeros.
 * - The order of occurrence of the digits in num1 and num2 may differ from the order of occurrence
 *   of num.
 */

/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
  const digits = String(num).split('').sort((a, b) => a - b);
  let num1 = '';
  let num2 = '';

  for (let i = 0; i < digits.length; i++) {
    if (i % 2 === 0) {
      num1 += digits[i];
    } else {
      num2 += digits[i];
    }
  }

  return Number(num1) + Number(num2);
};
