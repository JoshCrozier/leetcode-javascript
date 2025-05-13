/**
 * 2119. A Number After a Double Reversal
 * https://leetcode.com/problems/a-number-after-a-double-reversal/
 * Difficulty: Easy
 *
 * Reversing an integer means to reverse all its digits.
 * - For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros
 *   are not retained.
 *
 * Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2.
 * Return true if reversed2 equals num. Otherwise return false.
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
  return num === 0 || num % 10 !== 0;
};
