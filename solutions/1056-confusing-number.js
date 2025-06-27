/**
 * 1056. Confusing Number
 * https://leetcode.com/problems/confusing-number/
 * Difficulty: Easy
 *
 * A confusing number is a number that when rotated 180 degrees becomes a different number with
 * each digit valid.
 *
 * We can rotate digits of a number by 180 degrees to form new digits.
 * - When 0, 1, 6, 8, and 9 are rotated 180 degrees, they become 0, 1, 9, 8, and 6 respectively.
 * - When 2, 3, 4, 5, and 7 are rotated 180 degrees, they become invalid.
 *
 * Note that after rotating a number, we can ignore leading zeros.
 * - For example, after rotating 8000, we have 0008 which is considered as just 8.
 *
 * Given an integer n, return true if it is a confusing number, or false otherwise.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
  const rotationMap = { '0': '0', '1': '1', '6': '9', '8': '8', '9': '6' };
  const digits = n.toString();

  let rotated = '';
  for (let i = digits.length - 1; i >= 0; i--) {
    if (!(digits[i] in rotationMap)) {
      return false;
    }
    rotated += rotationMap[digits[i]];
  }

  return parseInt(rotated, 10) !== n;
};
