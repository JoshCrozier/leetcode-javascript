/**
 * 1324. Print Words Vertically
 * https://leetcode.com/problems/print-words-vertically/
 * Difficulty: Medium
 *
 * Given a string s. Return all the words vertically in the same
 * order in which they appear in s.
 * Words are returned as a list of strings, complete with spaces
 * when is necessary. (Trailing spaces are not allowed).
 * Each word would be put on only one column and that in one
 * column there will be only one word.
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
  const result = [];
  s.split(/\s+/).forEach((word, i) => word.split('').forEach((letter, j) => {
    result[j] = result[j] || '';
    result[j] += letter.padStart(i - result[j].length + 1, ' ');
  }));
  return result;
};
