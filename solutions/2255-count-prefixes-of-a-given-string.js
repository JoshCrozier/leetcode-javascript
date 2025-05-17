/**
 * 2255. Count Prefixes of a Given String
 * https://leetcode.com/problems/count-prefixes-of-a-given-string/
 * Difficulty: Easy
 *
 * You are given a string array words and a string s, where words[i] and s comprise only of
 * lowercase English letters.
 *
 * Return the number of strings in words that are a prefix of s.
 *
 * A prefix of a string is a substring that occurs at the beginning of the string. A substring
 * is a contiguous sequence of characters within a string.
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
  let result = 0;

  for (const word of words) {
    if (word.length <= s.length && s.startsWith(word)) {
      result++;
    }
  }

  return result;
};
