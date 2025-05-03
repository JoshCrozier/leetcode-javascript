/**
 * 1915. Number of Wonderful Substrings
 * https://leetcode.com/problems/number-of-wonderful-substrings/
 * Difficulty: Medium
 *
 * A wonderful string is a string where at most one letter appears an odd number of times.
 * - For example, "ccjjc" and "abab" are wonderful, but "ab" is not.
 *
 * Given a string word that consists of the first ten lowercase English letters ('a' through
 * 'j'), return the number of wonderful non-empty substrings in word. If the same substring
 * appears multiple times in word, then count each occurrence separately.
 *
 * A substring is a contiguous sequence of characters in a string.
 */

/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function(word) {
  let count = 0;
  const freq = new Map([[0, 1]]);
  let state = 0;

  for (const char of word) {
    const bit = 1 << (char.charCodeAt(0) - 97);
    state ^= bit;

    count += freq.get(state) || 0;
    freq.set(state, (freq.get(state) || 0) + 1);

    for (let i = 0; i < 10; i++) {
      const oddBit = state ^ (1 << i);
      count += freq.get(oddBit) || 0;
    }
  }

  return count;
};
