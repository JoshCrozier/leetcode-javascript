/**
 * 1796. Second Largest Digit in a String
 * https://leetcode.com/problems/second-largest-digit-in-a-string/
 * Difficulty: Easy
 *
 * Given an alphanumeric string s, return the second largest numerical digit that appears in
 * s, or -1 if it does not exist.
 *
 * An alphanumeric string is a string consisting of lowercase English letters and digits.
 */

/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  let largest = -1;
  let result = -1;

  for (const char of s) {
    if (/\d/.test(char)) {
      const digit = parseInt(char);
      if (digit > largest) {
        result = largest;
        largest = digit;
      } else if (digit < largest && digit > result) {
        result = digit;
      }
    }
  }

  return result;
};
