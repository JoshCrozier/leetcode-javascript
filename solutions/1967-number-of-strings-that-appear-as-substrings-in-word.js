/**
 * 1967. Number of Strings That Appear as Substrings in Word
 * https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/
 * Difficulty: Easy
 *
 * Given an array of strings patterns and a string word, return the number of strings in patterns
 * that exist as a substring in word.
 *
 * A substring is a contiguous sequence of characters within a string.
 */

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
  return patterns.reduce((count, pattern) => word.includes(pattern) ? count + 1 : count, 0);
};
