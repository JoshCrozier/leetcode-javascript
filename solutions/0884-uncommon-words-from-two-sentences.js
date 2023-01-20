/**
 * 884. Uncommon Words from Two Sentences
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/
 * Difficulty: Easy
 *
 * A sentence is a string of single-space separated words where each word
 * consists only of lowercase letters.
 *
 * A word is uncommon if it appears exactly once in one of the sentences,
 * and does not appear in the other sentence.
 *
 * Given two sentences s1 and s2, return a list of all the uncommon words.
 * You may return the answer in any order.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  const map = new Map();
  (s1 + ' ' + s2).split(/\s+/).forEach(s => map.set(s, (map.get(s) || 0) + 1));
  return [...map].reduce((a, [k, c]) => c === 1 ? [...a, k] : a, []);
};
