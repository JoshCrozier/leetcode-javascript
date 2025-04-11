/**
 * 2843. Count Symmetric Integers
 * https://leetcode.com/problems/count-symmetric-integers/
 * Difficulty: Easy
 *
 * You are given two positive integers low and high.
 *
 * An integer x consisting of 2 * n digits is symmetric if the sum of the first n digits of x is
 * equal to the sum of the last n digits of x. Numbers with an odd number of digits are never
 * symmetric.
 *
 * Return the number of symmetric integers in the range [low, high].
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
  let result = 0;

  for (let number = low; number <= high; number++) {
    if (isSymmetric(number)) result++;
  }

  return result;

  function isSymmetric(number) {
    const digits = number.toString().split('');
    const length = digits.length;
    if (length % 2 !== 0) return false;
    const mid = length / 2;
    const firstHalfSum = digits.slice(0, mid).reduce((sum, digit) => sum + Number(digit), 0);
    const secondHalfSum = digits.slice(mid).reduce((sum, digit) => sum + Number(digit), 0);

    return firstHalfSum === secondHalfSum;
  }
};
