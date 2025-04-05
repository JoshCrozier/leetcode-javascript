/**
 * 1155. Number of Dice Rolls With Target Sum
 * https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
 * Difficulty: Medium
 *
 * You have n dice, and each dice has k faces numbered from 1 to k.
 *
 * Given three integers n, k, and target, return the number of possible ways (out of the kn total
 * ways) to roll the dice, so the sum of the face-up numbers equals target. Since the answer may
 * be too large, return it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(diceCount, faceCount, targetSum) {
  const MOD = 1e9 + 7;
  let dp = new Array(targetSum + 1).fill(0);
  dp[0] = 1;

  for (let dice = 1; dice <= diceCount; dice++) {
    const nextDp = new Array(targetSum + 1).fill(0);
    for (let sum = 1; sum <= targetSum; sum++) {
      for (let face = 1; face <= faceCount && face <= sum; face++) {
        nextDp[sum] = (nextDp[sum] + dp[sum - face]) % MOD;
      }
    }
    dp = nextDp;
  }

  return dp[targetSum];
};
