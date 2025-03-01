/**
 * 1930. Unique Length-3 Palindromic Subsequences
 * https://leetcode.com/problems/unique-length-3-palindromic-subsequences/
 * Difficulty: Medium
 *
 * Given a string s, return the number of unique palindromes of length three that are a
 * subsequence of s.
 *
 * Note that even if there are multiple ways to obtain the same subsequence, it is still
 * only counted once.
 *
 * A palindrome is a string that reads the same forwards and backwards.
 *
 * A subsequence of a string is a new string generated from the original string with some
 * characters (can be none) deleted without changing the relative order of the remaining
 * characters.
 *
 * For example, "ace" is a subsequence of "abcde".
 */

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
  let result = 0;

  for (let i = 0; i < 26; ++i) {
    const char = String.fromCharCode(i + 97);
    const left = s.indexOf(char);
    const right = s.lastIndexOf(char);
    if (left !== -1 && right !== -1 && left < right) {
      result += new Set(s.substring(left + 1, right)).size;
    }
  }

  return result;
};
