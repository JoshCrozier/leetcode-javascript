/**
 * 2400. Number of Ways to Reach a Position After Exactly k Steps
 * https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/
 * Difficulty: Medium
 *
 * You are given two positive integers startPos and endPos. Initially, you are standing at
 * position startPos on an infinite number line. With one step, you can move either one position
 * to the left, or one position to the right.
 *
 * Given a positive integer k, return the number of different ways to reach the position endPos
 * starting from startPos, such that you perform exactly k steps. Since the answer may be very
 * large, return it modulo 109 + 7.
 *
 * Two ways are considered different if the order of the steps made is not exactly the same.
 *
 * Note that the number line includes negative integers.
 */

/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function(startPos, endPos, k) {
  const MOD = 1e9 + 7;
  const dp = new Array(3000).fill().map(() => new Array(k + 1).fill(-1));

  return helper(startPos, endPos, k);

  function helper(currentPos, targetPos, remainingSteps) {
    if (currentPos === targetPos && remainingSteps === 0) {
      return 1;
    }
    if (remainingSteps === 0) {
      return 0;
    }

    const dpIndex = currentPos + 1000;
    if (dp[dpIndex][remainingSteps] !== -1) {
      return dp[dpIndex][remainingSteps];
    }
    const leftMove = helper(currentPos - 1, targetPos, remainingSteps - 1);
    const rightMove = helper(currentPos + 1, targetPos, remainingSteps - 1);

    dp[dpIndex][remainingSteps] = (leftMove + rightMove) % MOD;
    return dp[dpIndex][remainingSteps];
  }
};
