/**
 * 1230. Toss Strange Coins
 * https://leetcode.com/problems/toss-strange-coins/
 * Difficulty: Medium
 *
 * You have some coins.  The i-th coin has a probability prob[i] of facing heads when tossed.
 *
 * Return the probability that the number of coins facing heads equals target if you toss every
 * coin exactly once.
 */

/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function(prob, target) {
  const n = prob.length;
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = Math.min(i + 1, target); j >= 1; j--) {
      dp[j] = dp[j] * (1 - prob[i]) + dp[j - 1] * prob[i];
    }
    dp[0] *= (1 - prob[i]);
  }

  return dp[target];
};
