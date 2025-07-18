/**
 * 3253. Construct String with Minimum Cost (Easy)
 * https://leetcode.com/problems/construct-string-with-minimum-cost-easy/
 * Difficulty: Medium
 *
 * You are given a string target, an array of strings words, and an integer array costs,
 * both arrays of the same length.
 *
 * Imagine an empty string s.
 *
 * You can perform the following operation any number of times (including zero):
 * - Choose an index i in the range [0, words.length - 1].
 * - Append words[i] to s.
 * - The cost of operation is costs[i].
 *
 * Return the minimum cost to make s equal to target. If it's not possible, return -1.
 */

/**
 * @param {string} target
 * @param {string[]} words
 * @param {number[]} costs
 * @return {number}
 */
var minimumCost = function(target, words, costs) {
  const n = target.length;
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    if (dp[i] === Infinity) continue;

    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      const cost = costs[j];

      if (i + word.length <= n && target.substring(i, i + word.length) === word) {
        dp[i + word.length] = Math.min(dp[i + word.length], dp[i] + cost);
      }
    }
  }

  return dp[n] === Infinity ? -1 : dp[n];
};
