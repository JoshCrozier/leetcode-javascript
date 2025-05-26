/**
 * 2585. Number of Ways to Earn Points
 * https://leetcode.com/problems/number-of-ways-to-earn-points/
 * Difficulty: Hard
 *
 * There is a test that has n types of questions. You are given an integer target and a 0-indexed
 * 2D integer array types where types[i] = [counti, marksi] indicates that there are counti
 * questions of the ith type, and each one of them is worth marksi points.
 *
 * Return the number of ways you can earn exactly target points in the exam. Since the answer may
 * be too large, return it modulo 109 + 7.
 *
 * Note that questions of the same type are indistinguishable.
 * - For example, if there are 3 questions of the same type, then solving the 1st and 2nd questions
 *   is the same as solving the 1st and 3rd questions, or the 2nd and 3rd questions.
 */

/**
 * @param {number} target
 * @param {number[][]} types
 * @return {number}
 */
var waysToReachTarget = function(target, types) {
  const MOD = 1e9 + 7;
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (const [count, marks] of types) {
    for (let points = target; points >= 0; points--) {
      for (let k = 1; k <= count && points >= k * marks; k++) {
        dp[points] = (dp[points] + dp[points - k * marks]) % MOD;
      }
    }
  }

  return dp[target];
};
