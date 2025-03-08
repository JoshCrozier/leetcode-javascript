/**
 * 647. Palindromic Substrings
 * https://leetcode.com/problems/palindromic-substrings/
 * Difficulty: Medium
 *
 * Given a string s, return the number of palindromic substrings in it.
 *
 * A string is a palindrome when it reads the same backward as forward.
 *
 * A substring is a contiguous sequence of characters within the string.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    result += expand(i, i);
    result += expand(i, i + 1);
  }

  return result;

  function expand(left, right) {
    let count = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
    return count;
  }
};
