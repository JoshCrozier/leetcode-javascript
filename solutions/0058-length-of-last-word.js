/**
 * 58. Length of Last Word
 * https://leetcode.com/problems/length-of-last-word/
 * Difficulty: Easy
 *
 * Given a string `s` consists of upper/lower-case alphabets
 * and empty space characters ' ', return the length of last
 * word (last word means the last appearing word if we loop
 * from left to right) in the string.
 *
 * If the last word does not exist, return 0.
 *
 * Note: A word is defined as a maximal substring consisting
 * of non-space characters only.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  return s.trim().split(/\s+/).pop().length;
};
