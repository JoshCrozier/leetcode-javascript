/**
 * 2486. Append Characters to String to Make Subsequence
 * https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/
 * Difficulty: Medium
 *
 * You are given two strings s and t consisting of only lowercase English letters.
 *
 * Return the minimum number of characters that need to be appended to the end of s so that
 * t becomes a subsequence of s.
 *
 * A subsequence is a string that can be derived from another string by deleting some or no
 * characters without changing the order of the remaining characters.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
  let sIndex = 0;
  let tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      tIndex++;
    }
    sIndex++;
  }

  return t.length - tIndex;
};
