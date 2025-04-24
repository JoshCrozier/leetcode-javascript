/**
 * 1638. Count Substrings That Differ by One Character
 * https://leetcode.com/problems/count-substrings-that-differ-by-one-character/
 * Difficulty: Medium
 *
 * Given two strings s and t, find the number of ways you can choose a non-empty substring of s
 * and replace a single character by a different character such that the resulting substring is
 * a substring of t. In other words, find the number of substrings in s that differ from some
 * substring in t by exactly one character.
 *
 * For example, the underlined substrings in "computer" and "computation" only differ by the
 * 'e'/'a', so this is a valid way.
 *
 * Return the number of substrings that satisfy the condition above.
 *
 * A substring is a contiguous sequence of characters within a string.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      let diffCount = 0;
      for (let k = 0; i + k < s.length && j + k < t.length; k++) {
        if (s[i + k] !== t[j + k]) diffCount++;
        if (diffCount === 1) result++;
        if (diffCount > 1) break;
      }
    }
  }

  return result;
};
