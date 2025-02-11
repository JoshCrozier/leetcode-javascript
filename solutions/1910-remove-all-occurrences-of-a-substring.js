/**
 * 1910. Remove All Occurrences of a Substring
 * https://leetcode.com/problems/remove-all-occurrences-of-a-substring/
 * Difficulty: Medium
 *
 * Given two strings s and part, perform the following operation on s until all occurrences of
 * the substring part are removed:
 * - Find the leftmost occurrence of the substring part and remove it from s.
 *
 * Return s after removing all occurrences of part.
 *
 * A substring is a contiguous sequence of characters in a string.
 */

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
  while (s.includes(part)) {
    s = s.replace(part, '');
  }
  return s;
};
