/**
 * 1216. Valid Palindrome III
 * https://leetcode.com/problems/valid-palindrome-iii/
 * Difficulty: Hard
 *
 * Given a string s and an integer k, return true if s is a k-palindrome.
 *
 * A string is k-palindrome if it can be transformed into a palindrome by removing
 * at most k characters from it.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function(s, k) {
  const n = s.length;
  const memo = new Array(n).fill().map(() => new Array(n).fill(-1));
  const longestPalindrome = longestPalindromeSubseq(0, n - 1);
  const deletions = n - longestPalindrome;

  return deletions <= k;

  function longestPalindromeSubseq(left, right) {
    if (left > right) return 0;
    if (left === right) return 1;

    if (memo[left][right] !== -1) return memo[left][right];

    if (s[left] === s[right]) {
      memo[left][right] = 2 + longestPalindromeSubseq(left + 1, right - 1);
    } else {
      memo[left][right] = Math.max(
        longestPalindromeSubseq(left + 1, right),
        longestPalindromeSubseq(left, right - 1)
      );
    }

    return memo[left][right];
  }
};
