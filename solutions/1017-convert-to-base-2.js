/**
 * 1017. Convert to Base -2
 * https://leetcode.com/problems/convert-to-base-2/
 * Difficulty: Medium
 *
 * Given an integer n, return a binary string representing its representation in base -2.
 *
 * Note that the returned string should not have leading zeros unless the string is "0".
 */

/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function(number) {
  if (number === 0) return '0';

  let result = '';
  let current = number;

  while (current !== 0) {
    const remainder = current & 1;
    result = remainder + result;
    current = (current - remainder) / -2;
  }

  return result;
};
