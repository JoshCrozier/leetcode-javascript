/**
 * 2116. Check if a Parentheses String Can Be Valid
 * https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/
 * Difficulty: Medium
 *
 * A parentheses string is a non-empty string consisting only of '(' and ')'. It is valid
 * if any of the following conditions is true:
 * - It is ().
 * - It can be written as AB (A concatenated with B), where A and B are valid parentheses
 *   strings.
 * - It can be written as (A), where A is a valid parentheses string.
 *
 * You are given a parentheses string s and a string locked, both of length n. locked is a
 * binary string consisting only of '0's and '1's. For each index i of locked,
 * - If locked[i] is '1', you cannot change s[i].
 * - But if locked[i] is '0', you can change s[i] to either '(' or ')'.
 *
 * Return true if you can make s a valid parentheses string. Otherwise, return false.
 */

/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function(s, locked) {
  if (s.length % 2) return false;

  let symmetrical = 0;
  for (let i = 0; i < s.length; i++) {
    if (locked[i] === '0' || s[i] === '(') {
      symmetrical++;
    } else {
      symmetrical--;
    }
    if (symmetrical < 0) {
      return false;
    }
  }

  symmetrical = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (locked[i] === '0' || s[i] === ')') {
      symmetrical++;
    } else {
      symmetrical--;
    }
    if (symmetrical < 0) {
      return false;
    }
  }

  return true;
};
