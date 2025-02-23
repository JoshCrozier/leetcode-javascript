/**
 * 368. Largest Divisible Subset
 * https://leetcode.com/problems/largest-divisible-subset/
 * Difficulty: Medium
 *
 * Given a set of distinct positive integers nums, return the largest subset answer such that
 * every pair (answer[i], answer[j]) of elements in this subset satisfies:
 * - answer[i] % answer[j] == 0, or
 * - answer[j] % answer[i] == 0
 *
 * If there are multiple solutions, return any of them.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  nums.sort((a, b) => a - b);
  const dp = nums.map(() => [1, -1]);
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[j][0] + 1 > dp[i][0]) {
        dp[i] = [dp[j][0] + 1, j], dp[i][0] > dp[max][0] && (max = i);
      }
    }
  }

  const result = [];
  for (let i = max; i >= 0; i = dp[i][1]) {
    result.unshift(nums[i]);
  }

  return result;
};
