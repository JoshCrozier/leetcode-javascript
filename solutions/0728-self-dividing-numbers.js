/**
 * 728. Self Dividing Numbers
 * https://leetcode.com/problems/self-dividing-numbers/
 * Difficulty: Easy
 *
 * A self-dividing number is a number that is divisible by every digit it contains.
 * - For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0,
 *   and 128 % 8 == 0.
 *
 * A self-dividing number is not allowed to contain the digit zero.
 *
 * Given two integers left and right, return a list of all the self-dividing numbers
 * in the range [left, right] (both inclusive).
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  return Array.from({ length: right - left + 1 }, (_, i) => left + i)
    .filter(n => String(n).split('').every(d => d !== '0' && n % d === 0));
};
