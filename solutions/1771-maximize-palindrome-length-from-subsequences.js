/**
 * 1771. Maximize Palindrome Length From Subsequences
 * https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/
 * Difficulty: Hard
 *
 * You are given two strings, word1 and word2. You want to construct a string in the following
 * manner:
 * - Choose some non-empty subsequence subsequence1 from word1.
 * - Choose some non-empty subsequence subsequence2 from word2.
 * - Concatenate the subsequences: subsequence1 + subsequence2, to make the string.
 *
 * Return the length of the longest palindrome that can be constructed in the described manner.
 * If no palindromes can be constructed, return 0.
 *
 * A subsequence of a string s is a string that can be made by deleting some (possibly none)
 * characters from s without changing the order of the remaining characters.
 *
 * A palindrome is a string that reads the same forward as well as backward.
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var longestPalindrome = function(word1, word2) {
  const s = word1 + word2;
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  let result = 0;

  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
        if (i < word1.length && j >= word1.length) {
          result = Math.max(result, dp[i][j]);
        }
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return result;
};
