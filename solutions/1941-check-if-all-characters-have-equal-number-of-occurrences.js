/**
 * 1941. Check if All Characters Have Equal Number of Occurrences
 * https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
 * Difficulty: Easy
 *
 * Given a string s, return true if s is a good string, or false otherwise.
 *
 * A string s is good if all the characters that appear in s have the same number of occurrences
 * (i.e., the same frequency).
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
  const map = new Map();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  const frequencies = new Set(map.values());
  return frequencies.size === 1;
};
