/**
 * 696. Count Binary Substrings
 * https://leetcode.com/problems/count-binary-substrings/
 * Difficulty: Easy
 *
 * Given a binary string s, return the number of non-empty substrings that have the same
 * number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped
 * consecutively.
 *
 * Substrings that occur multiple times are counted the number of times they occur.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let result = 0;

  for (let i = 0, group = [], count = 1, prevCount = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      if (prevCount) {
        result += prevCount <= count ? prevCount : count;
      }
      prevCount = count;
      count = 1;
    }
  }

  return result;
};
