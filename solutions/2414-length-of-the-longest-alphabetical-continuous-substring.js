/**
 * 2414. Length of the Longest Alphabetical Continuous Substring
 * https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/
 * Difficulty: Medium
 *
 * An alphabetical continuous string is a string consisting of consecutive letters in the alphabet.
 * In other words, it is any substring of the string "abcdefghijklmnopqrstuvwxyz".
 * - For example, "abc" is an alphabetical continuous string, while "acb" and "za" are not.
 *
 * Given a string s consisting of lowercase letters only, return the length of the longest
 * alphabetical continuous substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
  let result = 1;
  let currentLength = 1;

  for (let i = 1; i < s.length; i++) {
    if (s.charCodeAt(i) - s.charCodeAt(i - 1) === 1) {
      currentLength++;
      result = Math.max(result, currentLength);
    } else {
      currentLength = 1;
    }
  }

  return result;
};
