/**
 * 567. Permutation in String
 * https://leetcode.com/problems/permutation-in-string/
 * Difficulty: Medium
 *
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 *
 * In other words, return true if one of s1's permutations is the substring of s2.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const getCharCode = c => c.charCodeAt() - 'a'.charCodeAt();
  const isMatch = (a1, a2) => a1.every((n, i) => a2[i] === n);

  if (s1.length > s2.length) {
    return false;
  }

  const map1 = new Array(26).fill(0);
  const map2 = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    map1[getCharCode(s1[i])]++;
    map2[getCharCode(s2[i])]++;
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    if (isMatch(map1, map2)) return true;
    map2[getCharCode(s2[i + s1.length])]++;
    map2[getCharCode(s2[i])]--;
  }

  return isMatch(map1, map2);
};
