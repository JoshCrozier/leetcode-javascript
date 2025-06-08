/**
 * 3084. Count Substrings Starting and Ending with Given Character
 * https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/
 * Difficulty: Medium
 *
 * You are given a string s and a character c. Return the total number of substrings of s
 * that start and end with c.
 */

/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
var countSubstrings = function(s, c) {
  let count = 0;
  for (const char of s) {
    if (char === c) count++;
  }
  return (count * (count + 1)) / 2;
};
