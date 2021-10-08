/**
 * 1374. Generate a String With Characters That Have Odd Counts
 * https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
 * Difficulty: Easy
 *
 * Given an integer n, return a string with n characters such that each character in such
 * string occurs an odd number of times.
 *
 * The returned string must contain only lowercase English letters. If there are multiples
 * valid strings, return any of them.
 */

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  return 'a'.repeat(n % 2 ? n : n - 1) + (n % 2 ? '' : 'z');
};
