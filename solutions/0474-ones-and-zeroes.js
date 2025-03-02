/**
 * 474. Ones and Zeroes
 * https://leetcode.com/problems/ones-and-zeroes/
 * Difficulty: Medium
 *
 * You are given an array of binary strings strs and two integers m and n.
 *
 * Return the size of the largest subset of strs such that there are at most m 0's and n 1's
 * in the subset.
 *
 * A set x is a subset of a set y if all elements of x are also elements of y.
 */

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  const dp = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1));
  for (const str of strs) {
    const zeros = (str.match(/0/g) || []).length;
    const ones = str.length - zeros;
    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
      }
    }
  }
  return dp[m][n];
};
