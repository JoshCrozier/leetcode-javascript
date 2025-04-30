/**
 * 1784. Check if Binary String Has at Most One Segment of Ones
 * https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/
 * Difficulty: Easy
 *
 * Given a binary string s without leading zeros, return true if s contains at most one
 * contiguous segment of ones. Otherwise, return false.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
  let seenZero = false;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === '0') {
      seenZero = true;
    } else if (seenZero) {
      return false;
    }
  }

  return true;
};
