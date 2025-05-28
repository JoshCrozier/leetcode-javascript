/**
 * 2609. Find the Longest Balanced Substring of a Binary String
 * https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/
 * Difficulty: Easy
 *
 * You are given a binary string s consisting only of zeroes and ones.
 *
 * A substring of s is considered balanced if all zeroes are before ones and the number of zeroes
 * is equal to the number of ones inside the substring. Notice that the empty substring is
 * considered a balanced substring.
 *
 * Return the length of the longest balanced substring of s.
 *
 * A substring is a contiguous sequence of characters within a string.
 */

/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
  let result = 0;
  let zeros = 0;
  let ones = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      if (ones > 0) {
        zeros = 0;
        ones = 0;
      }
      zeros++;
    } else {
      if (zeros >= ones + 1) {
        ones++;
        result = Math.max(result, 2 * ones);
      } else {
        zeros = 0;
        ones = 0;
      }
    }
  }

  return result;
};
