/**
 * 2068. Check Whether Two Strings are Almost Equivalent
 * https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/
 * Difficulty: Easy
 *
 * Two strings word1 and word2 are considered almost equivalent if the differences between the
 * frequencies of each letter from 'a' to 'z' between word1 and word2 is at most 3.
 *
 * Given two strings word1 and word2, each of length n, return true if word1 and word2 are almost
 * equivalent, or false otherwise.
 *
 * The frequency of a letter x is the number of times it occurs in the string.
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
  const map = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    map[word1.charCodeAt(i) - 97]++;
    map[word2.charCodeAt(i) - 97]--;
  }

  return map.every(diff => Math.abs(diff) <= 3);
};
