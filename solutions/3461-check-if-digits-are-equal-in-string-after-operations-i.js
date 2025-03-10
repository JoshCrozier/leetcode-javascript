/**
 * 3461. Check If Digits Are Equal in String After Operations I
 * https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/
 * Difficulty: Easy
 *
 * You are given a string s consisting of digits. Perform the following operation repeatedly
 * until the string has exactly two digits:
 * - For each pair of consecutive digits in s, starting from the first digit, calculate a new
 *   digit as the sum of the two digits modulo 10.
 * - Replace s with the sequence of newly calculated digits, maintaining the order in which
 *   they are computed.
 *
 * Return true if the final two digits in s are the same; otherwise, return false.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
  while (s.length > 2) {
    let next = '';
    for (let i = 0; i < s.length - 1; i++) {
      next += (parseInt(s[i]) + parseInt(s[i + 1])) % 10;
    }
    s = next;
  }
  return s[0] === s[1];
};
