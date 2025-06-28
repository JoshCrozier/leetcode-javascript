/**
 * 1119. Remove Vowels from a String
 * https://leetcode.com/problems/remove-vowels-from-a-string/
 * Difficulty: Easy
 *
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and
 * return the new string.
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
  return s.replace(/[aeiou]/g, '');
};
