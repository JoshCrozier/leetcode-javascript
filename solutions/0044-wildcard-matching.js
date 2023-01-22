/**
 * 44. Wildcard Matching
 * https://leetcode.com/problems/wildcard-matching/
 * Difficulty: Hard
 *
 * Given an input string (s) and a pattern (p), implement wildcard pattern
 * matching with support for '?' and '*' where:
 *
 * - '?' Matches any single character.
 * - '*' Matches any sequence of characters (including the empty sequence).
 *
 * The matching should cover the entire input string (not partial).
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let i = 0;
  let j = 0;
  let start = -1;
  let offset = -1;

  while (i < s.length) {
    if (j < p.length && s[i] === p[j] || p[j] === '?') {
      i++;
      j++;
    } else if (j < p.length && p[j] === '*') {
      start = j;
      offset = i;
      j++;
    } else if (start === -1) {
      return false;
    } else {
      j = start + 1;
      i = offset + 1;
      offset = i;
    }
  }

  for (let index = j; index < p.length; index++) {
    if (p[index] !== '*') {
      return false;
    }
  }

  return true;
};
