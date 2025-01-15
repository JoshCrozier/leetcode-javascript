/**
 * 395. Longest Substring with At Least K Repeating Characters
 * https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
 * Difficulty: Medium
 *
 * Given a string s and an integer k, return the length of the longest substring of s such
 * that the frequency of each character in this substring is greater than or equal to k.
 *
 * If no such substring exists, return 0.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  for (const char of Array.from(new Set(s))) {
    if (s.match(new RegExp(char, 'g')).length < k) {
      return Math.max(...s.split(char).map(str => longestSubstring(str, k)));
    }
  }
  return s.length;
};
