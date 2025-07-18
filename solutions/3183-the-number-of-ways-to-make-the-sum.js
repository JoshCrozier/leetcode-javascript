/**
 * 3183. The Number of Ways to Make the Sum
 * https://leetcode.com/problems/the-number-of-ways-to-make-the-sum/
 * Difficulty: Medium
 *
 * You have an infinite number of coins with values 1, 2, and 6, and only 2 coins with value 4.
 *
 * Given an integer n, return the number of ways to make the sum of n with the coins you have.
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 *
 * Note that the order of the coins doesn't matter and [2, 2, 3] is the same as [2, 3, 2].
 */

/**
 * @param {number} n
 * @return {number}
 */
var numberOfWays = function(n) {
  const MOD = 1e9 + 7;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (const coin of [1, 2, 6]) {
    for (let amount = coin; amount <= n; amount++) {
      dp[amount] = (dp[amount] + dp[amount - coin]) % MOD;
    }
  }

  let result = dp[n];
  if (n >= 4) {
    result = (result + dp[n - 4]) % MOD;
  }
  if (n >= 8) {
    result = (result + dp[n - 8]) % MOD;
  }

  return result;
};
