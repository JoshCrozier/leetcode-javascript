/**
 * 1269. Number of Ways to Stay in the Same Place After Some Steps
 * https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/
 * Difficulty: Hard
 *
 * You have a pointer at index 0 in an array of size arrLen. At each step, you can move 1 position
 * to the left, 1 position to the right in the array, or stay in the same place (The pointer should
 * not be placed outside the array at any time).
 *
 * Given two integers steps and arrLen, return the number of ways such that your pointer is still
 * at index 0 after exactly steps steps. Since the answer may be too large, return it modulo
 * 109 + 7.
 */

/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
  const MOD = 1e9 + 7;
  const maxPos = Math.min(steps, arrLen - 1);
  let dp = new Array(maxPos + 1).fill(0);
  dp[0] = 1;

  for (let step = 1; step <= steps; step++) {
    const prev = dp;
    dp = new Array(maxPos + 1).fill(0);
    for (let pos = 0; pos <= maxPos; pos++) {
      dp[pos] = prev[pos];
      if (pos > 0) dp[pos] = (dp[pos] + prev[pos - 1]) % MOD;
      if (pos < maxPos) dp[pos] = (dp[pos] + prev[pos + 1]) % MOD;
    }
  }

  return dp[0];
};
