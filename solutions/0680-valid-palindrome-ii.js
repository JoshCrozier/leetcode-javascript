/**
 * 680. Valid Palindrome II
 * https://leetcode.com/problems/valid-palindrome-ii/
 * Difficulty: Easy
 *
 * Given a string s, return true if the s can be palindrome after deleting at most one
 * character from it.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    if (s[left] !== s[right]) {
      return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
    }
  }

  return true;
};

function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    right--;
    left++;
  }

  return true;
}
