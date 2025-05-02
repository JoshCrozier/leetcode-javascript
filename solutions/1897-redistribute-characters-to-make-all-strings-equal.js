/**
 * 1897. Redistribute Characters to Make All Strings Equal
 * https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
 * Difficulty: Easy
 *
 * You are given an array of strings words (0-indexed).
 *
 * In one operation, pick two distinct indices i and j, where words[i] is a non-empty string,
 * and move any character from words[i] to any position in words[j].
 *
 * Return true if you can make every string in words equal using any number of operations, and
 * false otherwise.
 */

/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
  const charCount = new Array(26).fill(0);
  const wordCount = words.length;

  for (const word of words) {
    for (const char of word) {
      charCount[char.charCodeAt(0) - 97]++;
    }
  }

  for (const count of charCount) {
    if (count % wordCount !== 0) return false;
  }

  return true;
};
