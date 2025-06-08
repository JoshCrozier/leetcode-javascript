/**
 * 161. One Edit Distance
 * https://leetcode.com/problems/one-edit-distance/
 * Difficulty: Medium
 *
 * Given two strings s and t, return true if they are both one edit distance apart, otherwise
 * return false.
 *
 * A string s is said to be one distance apart from a string t if you can:
 * - Insert exactly one character into s to get t.
 * - Delete exactly one character from s to get t.
 * - Replace exactly one character of s with a different character to get t.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  if (s === t) return false;
  const sLength = s.length;
  const tLength = t.length;
  if (Math.abs(sLength - tLength) > 1) return false;

  if (sLength > tLength) return isOneEditDistance(t, s);

  let i = 0;
  while (i < sLength && s[i] === t[i]) i++;

  if (sLength === tLength) {
    return i < sLength && s.slice(i + 1) === t.slice(i + 1);
  }

  return s.slice(i) === t.slice(i + 1);
};
