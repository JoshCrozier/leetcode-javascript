/**
 * 1016. Binary String With Substrings Representing 1 To N
 * https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/
 * Difficulty: Medium
 *
 * Given a binary string s and a positive integer n, return true if the binary representation of
 * all the integers in the range [1, n] are substrings of s, or false otherwise.
 *
 * A substring is a contiguous sequence of characters within a string.
 */

/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(binaryString, maxNumber) {
  return hasAllSubstrings(binaryString, maxNumber);

  function hasAllSubstrings(str, num) {
    for (let i = 1; i <= num; i++) {
      if (!str.includes(i.toString(2))) return false;
    }
    return true;
  }
};
