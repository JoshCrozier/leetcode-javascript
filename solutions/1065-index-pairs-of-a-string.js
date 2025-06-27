/**
 * 1065. Index Pairs of a String
 * https://leetcode.com/problems/index-pairs-of-a-string/
 * Difficulty: Easy
 *
 * Given a string text and an array of strings words, return an array of all index
 * pairs [i, j] so that the substring text[i...j] is in words.
 *
 * Return the pairs [i, j] in sorted order (i.e., sort them by their first coordinate,
 * and in case of ties sort them by their second coordinate).
 */

/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function(text, words) {
  const result = [];
  const wordSet = new Set(words);

  for (let i = 0; i < text.length; i++) {
    for (let j = i; j < text.length; j++) {
      const substring = text.slice(i, j + 1);
      if (wordSet.has(substring)) {
        result.push([i, j]);
      }
    }
  }

  return result;
};
