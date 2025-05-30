/**
 * 2716. Minimize String Length
 * https://leetcode.com/problems/minimize-string-length/
 * Difficulty: Easy
 *
 * Given a string s, you have two types of operation:
 * 1. Choose an index i in the string, and let c be the character in position i. Delete the
 *    closest occurrence of c to the left of i (if exists).
 * 2. Choose an index i in the string, and let c be the character in position i. Delete the
 *    closest occurrence of c to the right of i (if exists).
 *
 * Your task is to minimize the length of s by performing the above operations zero or more times.
 *
 * Return an integer denoting the length of the minimized string.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
  return new Set(s).size;
};
