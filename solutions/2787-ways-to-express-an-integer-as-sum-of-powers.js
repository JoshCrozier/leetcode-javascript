/**
 * 2787. Ways to Express an Integer as Sum of Powers
 * https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/
 * Difficulty: Medium
 *
 * Given two positive integers n and x.
 *
 * Return the number of ways n can be expressed as the sum of the xth power of unique positive
 * integers, in other words, the number of sets of unique integers [n1, n2, ..., nk] where
 * n = n1x + n2x + ... + nkx.
 *
 * Since the result can be very large, return it modulo 109 + 7.
 *
 * For example, if n = 160 and x = 3, one way to express n is n = 23 + 33 + 53.
 */

/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {
  const MOD = 1e9 + 7;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  let power = 1;
  while (Math.pow(power, x) <= n) {
    const currentPower = Math.pow(power, x);
    for (let sum = n; sum >= currentPower; sum--) {
      dp[sum] = (dp[sum] + dp[sum - currentPower]) % MOD;
    }
    power++;
  }

  return dp[n];
};
