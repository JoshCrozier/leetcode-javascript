/**
 * 3460. Longest Common Prefix After at Most One Removal
 * https://leetcode.com/problems/longest-common-prefix-after-at-most-one-removal/
 * Difficulty: Medium
 *
 * You are given two strings s and t.
 *
 * Return the length of the longest common prefix between s and t after removing at most
 * one character from s.
 *
 * Note: s can be left without any removal.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var longestCommonPrefix = function(s, t) {
  let i = 0;
  let j = 0;
  let result = 0;
  let isRemoved = false;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
      j++;
      result++;
    } else if (isRemoved) {
      return result;
    } else {
      isRemoved = true;
      i++;
    }
  }

  return result;
};
