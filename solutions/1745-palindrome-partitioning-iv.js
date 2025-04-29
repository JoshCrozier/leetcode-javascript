/**
 * 1745. Palindrome Partitioning IV
 * https://leetcode.com/problems/palindrome-partitioning-iv/
 * Difficulty: Hard
 *
 * Given a string s, return true if it is possible to split the string s into three non-empty
 * palindromic substrings. Otherwise, return false.
 *
 * A string is said to be palindrome if it the same string when reversed.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkPartitioning = function(s) {
  const n = s.length;
  const isPalindrome = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (s[i] === s[j] && (j - i <= 2 || isPalindrome[i + 1][j - 1])) {
        isPalindrome[i][j] = true;
      }
    }
  }

  for (let i = 1; i < n - 1; i++) {
    for (let j = i; j < n - 1; j++) {
      if (isPalindrome[0][i - 1] && isPalindrome[i][j] && isPalindrome[j + 1][n - 1]) {
        return true;
      }
    }
  }

  return false;
};
