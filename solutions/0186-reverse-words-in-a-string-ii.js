/**
 * 186. Reverse Words in a String II
 * https://leetcode.com/problems/reverse-words-in-a-string-ii/
 * Difficulty: Medium
 *
 * Given a character array s, reverse the order of the words.
 *
 * A word is defined as a sequence of non-space characters. The words in s will be separated
 * by a single space.
 *
 * Your code must solve the problem in-place, i.e. without allocating extra space.
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  left = 0;
  for (let i = 0; i <= s.length; i++) {
    if (i === s.length || s[i] === ' ') {
      right = i - 1;
      while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
      }
      left = i + 1;
    }
  }
};
