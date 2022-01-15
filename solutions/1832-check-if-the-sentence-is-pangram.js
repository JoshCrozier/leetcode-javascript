/**
 * 1832. Check if the Sentence Is Pangram
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 * Difficulty: Easy
 *
 * A pangram is a sentence where every letter of the English alphabet appears
 * at least once.
 *
 * Given a string sentence containing only lowercase English letters, return
 * true if sentence is a pangram, or false otherwise.
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  return new Set([...sentence]).size === 26;
};
