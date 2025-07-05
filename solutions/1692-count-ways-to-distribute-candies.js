/**
 * 1692. Count Ways to Distribute Candies
 * https://leetcode.com/problems/count-ways-to-distribute-candies/
 * Difficulty: Hard
 *
 * There are n unique candies (labeled 1 through n) and k bags. You are asked to distribute all
 * the candies into the bags such that every bag has at least one candy.
 *
 * There can be multiple ways to distribute the candies. Two ways are considered different if
 * the candies in one bag in the first way are not all in the same bag in the second way. The
 * order of the bags and the order of the candies within each bag do not matter.
 *
 * For example, (1), (2,3) and (2), (1,3) are considered different because candies 2 and 3 in
 * the bag (2,3) in the first way are not in the same bag in the second way (they are split
 * between the bags (2) and (1,3)). However, (1), (2,3) and (3,2), (1) are considered the same
 * because the candies in each bag are all in the same bags in both ways.
 *
 * Given two integers, n and k, return the number of different ways to distribute the candies.
 * As the answer may be too large, return it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var waysToDistribute = function(n, k) {
  const MOD = 1e9 + 7;
  const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    dp[i][1] = 1;
  }

  for (let candies = 2; candies <= n; candies++) {
    for (let bags = 2; bags <= Math.min(candies, k); bags++) {
      dp[candies][bags] = (dp[candies - 1][bags - 1] + (bags * dp[candies - 1][bags]) % MOD) % MOD;
    }
  }

  return dp[n][k];
};
