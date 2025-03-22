/**
 * 902. Numbers At Most N Given Digit Set
 * https://leetcode.com/problems/numbers-at-most-n-given-digit-set/
 * Difficulty: Hard
 *
 * Given an array of digits which is sorted in non-decreasing order. You can write numbers using
 * each digits[i] as many times as we want. For example, if digits = ['1','3','5'], we may write
 * numbers such as '13', '551', and '1351315'.
 *
 * Return the number of positive integers that can be generated that are less than or equal to
 * a given integer n.
 */

/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function(digits, n) {
  const str = n.toString();
  const digitCount = digits.length;
  let result = 0;

  for (let i = 1; i < str.length; i++) {
    result += Math.pow(digitCount, i);
  }

  function countValid(prefixLen) {
    if (prefixLen === str.length) return 1;

    const currentDigit = str[prefixLen];
    let valid = 0;

    for (const digit of digits) {
      if (digit < currentDigit) {
        valid += Math.pow(digitCount, str.length - prefixLen - 1);
      } else if (digit === currentDigit) {
        valid += countValid(prefixLen + 1);
      } else {
        break;
      }
    }

    return valid;
  }

  return result + countValid(0);
};
