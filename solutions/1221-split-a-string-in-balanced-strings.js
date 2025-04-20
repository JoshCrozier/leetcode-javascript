/**
 * 1221. Split a String in Balanced Strings
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 * Difficulty: Easy
 *
 * Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
 *
 * Given a balanced string s, split it into some number of substrings such that:
 * - Each substring is balanced.
 *
 * Return the maximum number of balanced strings you can obtain.
 */

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let result = 0;
  let balance = 0;

  for (const char of s) {
    if (char === 'R') balance++;
    else balance--;

    if (balance === 0) result++;
  }

  return result;
};
