/**
 * 357. Count Numbers with Unique Digits
 * https://leetcode.com/problems/count-numbers-with-unique-digits/
 * Difficulty: Medium
 *
 * Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) return 1;
  if (n > 10) return countNumbersWithUniqueDigits(10);
  let result = 9;
  for (let i = 0; i < n - 1; i++) {
    result *= (9 - i);
  }
  return result + countNumbersWithUniqueDigits(n - 1);
};
