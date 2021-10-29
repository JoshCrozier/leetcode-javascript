/**
 * 1446. Consecutive Characters
 * https://leetcode.com/problems/consecutive-characters/
 * Difficulty: Easy
 *
 * The power of the string is the maximum length of a non-empty substring
 * that contains only one unique character.
 *
 * Given a string s, return the power of s.
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let max = 1, count = 0;
  for (let i = 0; i < s.length; i++) {
    const prev = s[i - 1];
    count = prev === s[i] ? count + 1 : 0;
    max = Math.max(max, count + 1);
  }
  return max;
};
