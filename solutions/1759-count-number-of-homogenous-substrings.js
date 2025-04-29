/**
 * 1759. Count Number of Homogenous Substrings
 * https://leetcode.com/problems/count-number-of-homogenous-substrings/
 * Difficulty: Medium
 *
 * Given a string s, return the number of homogenous substrings of s. Since the answer may be
 * too large, return it modulo 109 + 7.
 *
 * A string is homogenous if all the characters of the string are the same.
 *
 * A substring is a contiguous sequence of characters within a string.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
  const mod = 1e9 + 7;
  let result = 0;
  let streak = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      streak++;
    } else {
      result = (result + (streak * (streak + 1) / 2)) % mod;
      streak = 1;
    }
  }

  result = (result + (streak * (streak + 1) / 2)) % mod;

  return result;
};
