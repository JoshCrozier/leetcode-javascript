/**
 * 2707. Extra Characters in a String
 * https://leetcode.com/problems/extra-characters-in-a-string/
 * Difficulty: Medium
 *
 * You are given a 0-indexed string s and a dictionary of words dictionary. You have to break
 * s into one or more non-overlapping substrings such that each substring is present in
 * dictionary. There may be some extra characters in s which are not present in any of the
 * substrings.
 *
 * Return the minimum number of extra characters left over if you break up s optimally.
 */

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
  const n = s.length;
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  const dictSet = new Set(dictionary);

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let j = 0; j < i; j++) {
      if (dictSet.has(s.slice(j, i))) {
        dp[i] = Math.min(dp[i], dp[j]);
      }
    }
  }

  return dp[n];
};
