/**
 * 87. Scramble String
 * https://leetcode.com/problems/scramble-string/
 * Difficulty: Hard
 *
 * We can scramble a string s to get a string t using the following algorithm:
 *
 * 1. If the length of the string is 1, stop.
 * 2. If the length of the string is > 1, do the following:
 *   - Split the string into two non-empty substrings at a random index, i.e., if the string
 *     is s, divide it to x and y where s = x + y.
 *   - Randomly decide to swap the two substrings or to keep them in the same order. i.e.,
 *     after this step, s may become s = x + y or s = y + x.
 *   - Apply step 1 recursively on each of the two substrings x and y.
 *
 * Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string
 * of s1, otherwise, return false.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  const n = s1.length;
  const dp = new Array(n).fill().map(() => new Array(n).fill().map(() => new Array(n).fill(null)));

  function dfs(i1, j1, i2) {
    if (dp[i1][j1][i2] !== null) {
      return dp[i1][j1][i2];
    }
    if (i1 == j1) {
      return dp[i1][j1][i2] = s1[i1] === s2[i2];
    }

    const j2 = j1 - i1 + i2;
    let result = false;
    for (let i = i1; i < j1; i++) {
      result = result || (dfs(i1, i, i2) && dfs(i + 1, j1, i2 + i - i1 + 1))
        || (dfs(i1, i, j2 - i + i1) && dfs(i + 1, j1, i2));
    }

    return dp[i1][j1][i2] = result;
  }

  return dfs(0, n - 1, 0);
};
