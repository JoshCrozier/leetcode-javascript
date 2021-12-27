/**
 * 1668. Maximum Repeating Substring
 * https://leetcode.com/problems/maximum-repeating-substring/
 * Difficulty: Easy
 *
 * For a string sequence, a string word is k-repeating if word concatenated k times is a substring
 * of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating
 * in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.
 *
 * Given strings sequence and word, return the maximum k-repeating value of word in sequence.
 */

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
  let count = Math.floor(sequence.length / word.length) + 1;
  while (--count) {
    if (sequence.includes(word.repeat(count))) return count;
  }
  return count;
};
