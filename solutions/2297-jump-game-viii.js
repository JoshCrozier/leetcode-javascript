/**
 * 2297. Jump Game VIII
 * https://leetcode.com/problems/jump-game-viii/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums of length n. You are initially standing at index 0.
 * You can jump from index i to index j where i < j if:
 * - nums[i] <= nums[j] and nums[k] < nums[i] for all indexes k in the range i < k < j, or
 * - nums[i] > nums[j] and nums[k] >= nums[i] for all indexes k in the range i < k < j.
 *
 * You are also given an integer array costs of length n where costs[i] denotes the cost of jumping
 * to index i.
 *
 * Return the minimum cost to jump to the index n - 1.
 */

/**
 * @param {number[]} nums
 * @param {number[]} costs
 * @return {number}
 */
var minCost = function(nums, costs) {
  const n = nums.length;
  const dp = new Array(n).fill(Infinity);
  dp[0] = 0;

  const increasingStack = [];
  const decreasingStack = [];
  for (let i = 0; i < n; i++) {
    while (increasingStack.length > 0
           && nums[increasingStack[increasingStack.length - 1]] > nums[i]) {
      const j = increasingStack.pop();
      dp[i] = Math.min(dp[i], dp[j] + costs[i]);
    }

    while (decreasingStack.length > 0
           && nums[decreasingStack[decreasingStack.length - 1]] <= nums[i]) {
      const j = decreasingStack.pop();
      dp[i] = Math.min(dp[i], dp[j] + costs[i]);
    }

    increasingStack.push(i);
    decreasingStack.push(i);
  }

  return dp[n - 1];
};
