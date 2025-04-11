/**
 * 1347. Minimum Number of Steps to Make Two Strings Anagram
 * https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
 * Difficulty: Medium
 *
 * You are given two strings of the same length s and t. In one step you can choose any character
 * of t and replace it with another character.
 *
 * Return the minimum number of steps to make t an anagram of s.
 *
 * An Anagram of a string is a string that contains the same characters with a different (or the
 * same) ordering.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  const charCount = new Array(26).fill(0);
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    charCount[s.charCodeAt(i) - 97]++;
    charCount[t.charCodeAt(i) - 97]--;
  }

  for (const count of charCount) {
    if (count > 0) result += count;
  }

  return result;
};
