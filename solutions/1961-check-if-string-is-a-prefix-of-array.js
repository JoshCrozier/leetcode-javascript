/**
 * 1961. Check If String Is a Prefix of Array
 * https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/
 * Difficulty: Easy
 *
 * Given a string s and an array of strings words, determine whether s is a prefix string of words.
 *
 * A string s is a prefix string of words if s can be made by concatenating the first k strings in
 * words for some positive k no larger than words.length.
 *
 * Return true if s is a prefix string of words, or false otherwise.
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
  let currentIndex = 0;

  for (const word of words) {
    if (currentIndex + word.length > s.length) return false;
    if (s.slice(currentIndex, currentIndex + word.length) !== word) return false;
    currentIndex += word.length;
    if (currentIndex === s.length) return true;
  }

  return false;
};
