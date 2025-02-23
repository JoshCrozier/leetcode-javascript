/**
 * 377. Combination Sum IV
 * https://leetcode.com/problems/combination-sum-iv/
 * Difficulty: Medium
 *
 * Given an array of distinct integers nums and a target integer target, return the number of
 * possible combinations that add up to target.
 *
 * The test cases are generated so that the answer can fit in a 32-bit integer.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    nums.forEach(n => dp[i] += i >= n ? dp[i - n] : 0);
  }

  return dp[target];
};
