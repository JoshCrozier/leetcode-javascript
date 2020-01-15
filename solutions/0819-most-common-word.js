/**
 * 819. Most Common Word
 * https://leetcode.com/problems/most-common-word/
 * Difficulty: Easy
 *
 * Given a paragraph and a list of banned words, return the most frequent word that
 * is not in the list of banned words.  It is guaranteed there is at least one word
 * that isn't banned, and that the answer is unique.
 *
 * Words in the list of banned words are given in lowercase, and free of punctuation.
 * Words in the paragraph are not case sensitive.  The answer is in lowercase.
 */

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const occurrences = new Map();
  paragraph.toLowerCase().replace(/[^\w\s]/g, ' ').split(/\s+/).forEach(word => {
    if (!banned.includes(word)) {
      occurrences.set(word, occurrences.has(word) ? occurrences.get(word) + 1 : 1);
    }
  });
  return Array.from(occurrences).sort((a, b) => b[1] - a[1])[0][0];
};
