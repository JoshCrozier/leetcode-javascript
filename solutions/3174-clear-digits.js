/**
 * 3174. Clear Digits
 * https://leetcode.com/problems/clear-digits/
 * Difficulty: Easy
 *
 * You are given a string s.
 *
 * Your task is to remove all digits by doing this operation repeatedly:
 * - Delete the first digit and the closest non-digit character to its left.
 *
 * Return the resulting string after removing all digits.
 */

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
  const stack = [];

  for (const character of s) {
    if (!isNaN(character) && stack.length) {
      stack.pop();
    } else {
      stack.push(character);
    }
  }

  return stack.join('');
};
