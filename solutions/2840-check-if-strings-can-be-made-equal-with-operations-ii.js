/**
 * 2840. Check if Strings Can be Made Equal With Operations II
 * https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/
 * Difficulty: Medium
 *
 * You are given two strings s1 and s2, both of length n, consisting of lowercase English letters.
 *
 * You can apply the following operation on any of the two strings any number of times:
 * - Choose any two indices i and j such that i < j and the difference j - i is even, then swap the
 *   two characters at those indices in the string.
 *
 * Return true if you can make the strings s1 and s2 equal, and false otherwise.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
  const evenChars1 = [];
  const oddChars1 = [];
  const evenChars2 = [];
  const oddChars2 = [];

  for (let i = 0; i < s1.length; i++) {
    if (i % 2 === 0) {
      evenChars1.push(s1[i]);
      evenChars2.push(s2[i]);
    } else {
      oddChars1.push(s1[i]);
      oddChars2.push(s2[i]);
    }
  }

  return evenChars1.sort().join('') === evenChars2.sort().join('')
    && oddChars1.sort().join('') === oddChars2.sort().join('');
};
