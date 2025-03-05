/**
 * 522. Longest Uncommon Subsequence II
 * https://leetcode.com/problems/longest-uncommon-subsequence-ii/
 * Difficulty: Medium
 *
 * Given an array of strings strs, return the length of the longest uncommon subsequence
 * between them. If the longest uncommon subsequence does not exist, return -1.
 *
 * An uncommon subsequence between an array of strings is a string that is a subsequence
 * of one string but not the others.
 *
 * A subsequence of a string s is a string that can be obtained after deleting any number
 * of characters from s.
 *
 * For example, "abc" is a subsequence of "aebdc" because you can delete the underlined
 * characters in "aebdc" to get "abc". Other subsequences of "aebdc" include "aebdc",
 * "aeb", and "" (empty string).
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
  strs.sort((a, b) => b.length - a.length);

  for (let i = 0; i < strs.length; i++) {
    let isUnique = true;
    for (let j = 0; j < strs.length; j++) {
      if (i !== j && isSubsequence(strs[i], strs[j])) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return strs[i].length;
    }
  }

  return -1;

  function isSubsequence(s1, s2) {
    let index = 0;
    for (const char of s2) {
      if (char === s1[index]) index++;
      if (index === s1.length) return true;
    }
    return false;
  }
};
