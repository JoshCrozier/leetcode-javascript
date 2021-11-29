/**
 * 1451. Rearrange Words in a Sentence
 * https://leetcode.com/problems/rearrange-words-in-a-sentence/
 * Difficulty: Medium
 *
 * Given a sentence text (A sentence is a string of space-separated words) in the following format:
 * - First letter is in upper case.
 * - Each word in text are separated by a single space.
 *
 * Your task is to rearrange the words in text such that all words are rearranged in an increasing
 * order of their lengths. If two words have the same length, arrange them in their original order.
 *
 * Return the new text following the format shown above.
 */

/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
  return text
    .split(/\s+/)
    .sort((a, b) => a.length - b.length)
    .join(' ')
    .toLowerCase()
    .replace(/^./, m => m.toUpperCase());
};
