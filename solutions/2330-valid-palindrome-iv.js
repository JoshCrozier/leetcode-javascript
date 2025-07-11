/**
 * 2330. Valid Palindrome IV
 * https://leetcode.com/problems/valid-palindrome-iv/
 * Difficulty: Medium
 *
 * You are given a 0-indexed string s consisting of only lowercase English letters.
 * In one operation, you can change any character of s to any other character.
 *
 * Return true if you can make s a palindrome after performing exactly one or two
 * operations, or return false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var makePalindrome = function(s) {
  const n = s.length;
  let mismatches = 0;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (s[i] !== s[n - 1 - i]) {
      mismatches++;
    }
  }

  return mismatches <= 2;
};
