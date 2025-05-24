/**
 * 2472. Maximum Number of Non-overlapping Palindrome Substrings
 * https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/
 * Difficulty: Hard
 *
 * You are given a string s and a positive integer k.
 *
 * Select a set of non-overlapping substrings from the string s that satisfy the following
 * conditions:
 * - The length of each substring is at least k.
 * - Each substring is a palindrome.
 *
 * Return the maximum number of substrings in an optimal selection.
 *
 * A substring is a contiguous sequence of characters within a string.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
  const n = s.length;
  const isPal = new Array(n).fill().map(() => new Array(n).fill(false));
  const dp = new Array(n + 1).fill(0);

  for (let len = 1; len <= n; len++) {
    for (let start = 0; start + len <= n; start++) {
      const end = start + len - 1;
      if (len === 1) {
        isPal[start][end] = true;
      } else if (len === 2) {
        isPal[start][end] = s[start] === s[end];
      } else {
        isPal[start][end] = s[start] === s[end] && isPal[start + 1][end - 1];
      }
    }
  }

  for (let end = k; end <= n; end++) {
    dp[end] = dp[end - 1];
    for (let start = end - k; start >= 0; start--) {
      if (isPal[start][end - 1]) {
        dp[end] = Math.max(dp[end], dp[start] + 1);
      }
    }
  }

  return dp[n];
};
