/**
 * 1616. Split Two Strings to Make Palindrome
 * https://leetcode.com/problems/split-two-strings-to-make-palindrome/
 * Difficulty: Medium
 *
 * You are given two strings a and b of the same length. Choose an index and split both strings at
 * the same index, splitting a into two strings: aprefix and asuffix where a = aprefix + asuffix,
 * and splitting b into two strings: bprefix and bsuffix where b = bprefix + bsuffix. Check if
 * aprefix + bsuffix or bprefix + asuffix forms a palindrome.
 *
 * When you split a string s into sprefix and ssuffix, either ssuffix or sprefix is allowed to be
 * empty. For example, if s = "abc", then "" + "abc", "a" + "bc", "ab" + "c" , and "abc" + "" are
 * valid splits.
 *
 * Return true if it is possible to form a palindrome string, otherwise return false.
 *
 * Notice that x + y denotes the concatenation of strings x and y.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function(a, b) {
  return check(a, b) || check(b, a);

  function isPalindrome(str, left, right) {
    while (left < right) {
      if (str[left++] !== str[right--]) return false;
    }
    return true;
  }

  function check(str1, str2) {
    let left = 0;
    let right = str1.length - 1;

    while (left < right && str1[left] === str2[right]) {
      left++;
      right--;
    }

    return isPalindrome(str1, left, right) || isPalindrome(str2, left, right);
  }
};
