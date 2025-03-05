/**
 * 524. Longest Word in Dictionary through Deleting
 * https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/
 * Difficulty: Medium
 *
 * Given a string s and a string array dictionary, return the longest string in the dictionary
 * that can be formed by deleting some of the given string characters. If there is more than
 * one possible result, return the longest word with the smallest lexicographical order.
 * If there is no possible result, return the empty string.
 */

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
  return dictionary
    .sort((a, b) => a.length === b.length ? a.localeCompare(b) : b.length - a.length)
    .find(word => {
      let i = 0;
      for (const character of s) {
        if (character === word[i]) i++;
        if (i === word.length) return true;
      }
      return false;
    }) || '';
};
