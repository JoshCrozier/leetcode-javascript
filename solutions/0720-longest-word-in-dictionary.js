/**
 * 720. Longest Word in Dictionary
 * https://leetcode.com/problems/longest-word-in-dictionary/
 * Difficulty: Medium
 *
 * Given an array of strings words representing an English Dictionary, return the longest word
 * in words that can be built one character at a time by other words in words.
 *
 * If there is more than one possible answer, return the longest word with the smallest
 * lexicographical order. If there is no answer, return the empty string.
 *
 * Note that the word should be built from left to right with each additional character being
 * added to the end of a previous word.
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  const set = new Set();
  let result = '';

  words.sort().forEach(word => {
    if (word.length === 1 || set.has(word.slice(0, -1))) {
      set.add(word);
      result = word.length > result.length ? word : result;
    }
  });

  return result;
};
