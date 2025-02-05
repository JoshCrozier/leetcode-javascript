/**
 * 1790. Check if One String Swap Can Make Strings Equal
 * https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/
 * Difficulty: Easy
 *
 * You are given two strings s1 and s2 of equal length. A string swap is an operation where
 * you choose two indices in a string (not necessarily different) and swap the characters
 * at these indices.
 *
 * Return true if it is possible to make both strings equal by performing at most one string
 * swap on exactly one of the strings. Otherwise, return false.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
  const indices = [];
  for (const i in s1) {
    if (s1[i] !== s2[i] && indices.push(i) > 2) return false;
  }
  return s1[indices[0]] === s2[indices[1]] && s1[indices[1]] === s2[indices[0]];
};
