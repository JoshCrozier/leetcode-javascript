/**
 * 2301. Match Substring After Replacement
 * https://leetcode.com/problems/match-substring-after-replacement/
 * Difficulty: Hard
 *
 * You are given two strings s and sub. You are also given a 2D character array mappings where
 * mappings[i] = [oldi, newi] indicates that you may perform the following operation any number
 * of times:
 * - Replace a character oldi of sub with newi.
 *
 * Each character in sub cannot be replaced more than once.
 *
 * Return true if it is possible to make sub a substring of s by replacing zero or more characters
 * according to mappings. Otherwise, return false.
 *
 * A substring is a contiguous non-empty sequence of characters within a string.
 */

/**
 * @param {string} s
 * @param {string} sub
 * @param {character[][]} mappings
 * @return {boolean}
 */
var matchReplacement = function(s, sub, mappings) {
  const map = new Map();

  for (const [oldChar, newChar] of mappings) {
    if (!map.has(oldChar)) {
      map.set(oldChar, new Set());
    }
    map.get(oldChar).add(newChar);
  }

  const subLen = sub.length;
  for (let i = 0; i <= s.length - subLen; i++) {
    let isValid = true;
    for (let j = 0; j < subLen; j++) {
      const sChar = s[i + j];
      const subChar = sub[j];
      if (sChar !== subChar && (!map.has(subChar) || !map.get(subChar).has(sChar))) {
        isValid = false;
        break;
      }
    }
    if (isValid) return true;
  }

  return false;
};
