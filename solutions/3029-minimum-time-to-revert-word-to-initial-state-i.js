/**
 * 3029. Minimum Time to Revert Word to Initial State I
 * https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/
 * Difficulty: Medium
 *
 * You are given a 0-indexed string word and an integer k.
 *
 * At every second, you must perform the following operations:
 * - Remove the first k characters of word.
 * - Add any k characters to the end of word.
 *
 * Note that you do not necessarily need to add the same characters that you removed.
 * However, you must perform both operations at every second.
 *
 * Return the minimum time greater than zero required for word to revert to its initial state.
 */

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumTimeToInitialState = function(word, k) {
  const n = word.length;

  for (let i = 1; i * k <= n; i++) {
    if (word.slice(i * k) === word.slice(0, n - i * k)) {
      return i;
    }
  }

  return Math.ceil(n / k);
};
