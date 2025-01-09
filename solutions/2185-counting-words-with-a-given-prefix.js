/**
 * 2185. Counting Words With a Given Prefix
 * https://leetcode.com/problems/counting-words-with-a-given-prefix/
 * Difficulty: Easy
 *
 * You are given an array of strings words and a string pref.
 *
 * Return the number of strings in words that contain pref as a prefix.
 *
 * A prefix of a string s is any leading contiguous substring of s.
 */

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
  return words.filter(word => word.startsWith(pref)).length;
};
