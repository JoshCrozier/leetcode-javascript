/**
 * 459. Repeated Substring Pattern
 * https://leetcode.com/problems/repeated-substring-pattern/
 * Difficulty: Easy
 *
 * Given a non-empty string check if it can be constructed by taking a
 * substring of it and appending multiple copies of the substring
 * together. You may assume the given string consists of lowercase
 * English letters only and its length will not exceed 10000.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  return (s + s).slice(1, s.length * 2 - 1).indexOf(s) !== -1;
};
