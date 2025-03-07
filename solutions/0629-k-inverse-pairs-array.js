/**
 * 629. K Inverse Pairs Array
 * https://leetcode.com/problems/k-inverse-pairs-array/
 * Difficulty: Hard
 *
 * For an integer array nums, an inverse pair is a pair of integers [i, j] where
 * 0 <= i < j < nums.length and nums[i] > nums[j].
 *
 * Given two integers n and k, return the number of different arrays consisting of numbers from
 * 1 to n such that there are exactly k inverse pairs. Since the answer can be huge, return
 * it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
  const MOD = 1e9 + 7;
  const dp = new Array(k + 1).fill(0);

  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    const previous = dp.slice();
    dp[0] = 1;
    for (let j = 1; j <= k; j++) {
      dp[j] = (previous[j] + dp[j-1]) % MOD;
      if (j >= i) dp[j] = (dp[j] - previous[j-i] + MOD) % MOD;
    }
  }

  return dp[k];
};
