/**
 * 557. Reverse Words in a String III
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 * Difficulty: Easy
 *
 * Given a string s, reverse the order of characters in each word within a sentence while
 * still preserving whitespace and initial word order.
 */

/**
 * @param {string} str
 * @return {string}
 */
var reverseWords = function(str) {
  return str.split(/\s/).map(s => s.split('').reverse().join('')).join(' ');
};
