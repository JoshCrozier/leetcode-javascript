/**
 * 926. Flip String to Monotone Increasing
 * https://leetcode.com/problems/flip-string-to-monotone-increasing/
 * Difficulty: Medium
 *
 * A binary string is monotone increasing if it consists of some number of 0's
 * (possibly none), followed by some number of 1's (also possibly none).
 *
 * You are given a binary string s. You can flip s[i] changing it from 0 to 1
 * or from 1 to 0.
 *
 * Return the minimum number of flips to make s monotone increasing.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
  let result = 0;
  let count = 0;

  for (const str of s) {
    if (str == '1') {
      count++;
    } else if (str =='0' && count > 0) {
      result++;
      count--;
    }
  }

  return result;
};
