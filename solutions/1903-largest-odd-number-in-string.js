/**
 * 1903. Largest Odd Number in String
 * https://leetcode.com/problems/largest-odd-number-in-string/
 * Difficulty: Easy
 *
 * You are given a string num, representing a large integer. Return the largest-valued odd
 * integer (as a string) that is a non-empty substring of num, or an empty string "" if no
 * odd integer exists.
 *
 * A substring is a contiguous sequence of characters within a string.
 */

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (parseInt(num[i]) % 2 === 1) {
      return num.slice(0, i + 1);
    }
  }
  return '';
};
