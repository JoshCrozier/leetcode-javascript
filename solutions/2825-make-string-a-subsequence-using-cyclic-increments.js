/**
 * 2825. Make String a Subsequence Using Cyclic Increments
 * https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/
 * Difficulty: Medium
 *
 * You are given two 0-indexed strings str1 and str2.
 *
 * In an operation, you select a set of indices in str1, and for each index i in the set,
 * increment str1[i] to the next character cyclically. That is 'a' becomes 'b', 'b' becomes
 * 'c', and so on, and 'z' becomes 'a'.
 *
 * Return true if it is possible to make str2 a subsequence of str1 by performing the operation
 * at most once, and false otherwise.
 *
 * Note: A subsequence of a string is a new string that is formed from the original string by
 * deleting some (possibly none) of the characters without disturbing the relative positions
 * of the remaining characters.
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    const curr = str1[i].charCodeAt(0);
    const next = curr === 122 ? 97 : curr + 1;
    if (str1[i] === str2[j] || String.fromCharCode(next) === str2[j]) {
      j++;
    }
    i++;
  }

  return j === str2.length;
};
