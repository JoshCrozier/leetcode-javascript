/**
 * 1312. Minimum Insertion Steps to Make a String Palindrome
 * https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
 * Difficulty: Hard
 *
 * Given a string s. In one step you can insert any character at any index of the string.
 *
 * Return the minimum number of steps to make s palindrome.
 *
 * A Palindrome String is one that reads the same backward as well as forward.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  const n = s.length;
  const dp = new Array(n).fill().map(() => new Array(n).fill(0));

  for (let len = 2; len <= n; len++) {
    for (let start = 0; start + len <= n; start++) {
      const end = start + len - 1;
      dp[start][end] = s[start] === s[end]
        ? dp[start + 1][end - 1]
        : Math.min(dp[start + 1][end], dp[start][end - 1]) + 1;
    }
  }

  return dp[0][n - 1];
};
