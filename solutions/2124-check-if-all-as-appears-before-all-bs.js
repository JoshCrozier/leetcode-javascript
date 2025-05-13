/**
 * 2124. Check if All A's Appears Before All B's
 * https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/
 * Difficulty: Easy
 *
 * Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears
 * before every 'b' in the string. Otherwise, return false.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
  let seen = false;

  for (const char of s) {
    if (char === 'b') seen = true;
    else if (seen) return false;
  }

  return true;
};
