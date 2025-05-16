/**
 * 2207. Maximize Number of Subsequences in a String
 * https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/
 * Difficulty: Medium
 *
 * You are given a 0-indexed string text and another 0-indexed string pattern of length 2, both
 * of which consist of only lowercase English letters.
 *
 * You can add either pattern[0] or pattern[1] anywhere in text exactly once. Note that the
 * character can be added even at the beginning or at the end of text.
 *
 * Return the maximum number of times pattern can occur as a subsequence of the modified text.
 *
 * A subsequence is a string that can be derived from another string by deleting some or no
 * characters without changing the order of the remaining characters.
 */

/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function(text, pattern) {
  const firstChar = pattern[0];
  const secondChar = pattern[1];
  let firstCount = 0;
  let secondCount = 0;
  let subsequences = 0;

  for (const char of text) {
    if (char === secondChar) {
      subsequences += firstCount;
      secondCount++;
    }
    if (char === firstChar) {
      firstCount++;
    }
  }

  return subsequences + Math.max(firstCount, secondCount);
};
