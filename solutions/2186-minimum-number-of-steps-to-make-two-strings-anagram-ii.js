/**
 * 2186. Minimum Number of Steps to Make Two Strings Anagram II
 * https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/
 * Difficulty: Medium
 *
 * You are given two strings s and t. In one step, you can append any character to either s or t.
 *
 * Return the minimum number of steps to make s and t anagrams of each other.
 *
 * An anagram of a string is a string that contains the same characters with a different (or the
 * same) ordering.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  const charCount = new Array(26).fill(0);

  for (const char of s) {
    charCount[char.charCodeAt(0) - 97]++;
  }

  for (const char of t) {
    charCount[char.charCodeAt(0) - 97]--;
  }

  let result = 0;
  for (const count of charCount) {
    result += Math.abs(count);
  }

  return result;
};
