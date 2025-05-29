/**
 * 2697. Lexicographically Smallest Palindrome
 * https://leetcode.com/problems/lexicographically-smallest-palindrome/
 * Difficulty: Easy
 *
 * You are given a string s consisting of lowercase English letters, and you are allowed to
 * perform operations on it. In one operation, you can replace a character in s with another
 * lowercase English letter.
 *
 * Your task is to make s a palindrome with the minimum number of operations possible. If there
 * are multiple palindromes that can be made using the minimum number of operations, make the
 * lexicographically smallest one.
 *
 * A string a is lexicographically smaller than a string b (of the same length) if in the first
 * position where a and b differ, string a has a letter that appears earlier in the alphabet
 * than the corresponding letter in b.
 *
 * Return the resulting palindrome string.
 */

/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
  const chars = s.split('');
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (chars[left] !== chars[right]) {
      chars[left] = chars[right] = chars[left] < chars[right] ? chars[left] : chars[right];
    }
    left++;
    right--;
  }

  return chars.join('');
};
