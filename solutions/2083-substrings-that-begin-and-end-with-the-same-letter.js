/**
 * 2083. Substrings That Begin and End With the Same Letter
 * https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/
 * Difficulty: Medium
 *
 * You are given a 0-indexed string s consisting of only lowercase English letters.
 * Return the number of substrings in s that begin and end with the same character.
 *
 * A substring is a contiguous non-empty sequence of characters within a string.
 */

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let result = 0;

  for (const count of map.values()) {
    result += (count * (count + 1)) / 2;
  }

  return result;
};
