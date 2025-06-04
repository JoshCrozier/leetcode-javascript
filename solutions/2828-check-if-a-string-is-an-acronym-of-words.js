/**
 * 2828. Check if a String Is an Acronym of Words
 * https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/
 * Difficulty: Easy
 *
 * Given an array of strings words and a string s, determine if s is an acronym of words.
 *
 * The string s is considered an acronym of words if it can be formed by concatenating the
 * first character of each string in words in order. For example, "ab" can be formed from
 * ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].
 *
 * Return true if s is an acronym of words, and false otherwise.
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
  if (words.length !== s.length) return false;
  return words.every((word, index) => word[0] === s[index]);
};
