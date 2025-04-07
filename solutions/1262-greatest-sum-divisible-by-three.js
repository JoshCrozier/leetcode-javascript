/**
 * 1262. Greatest Sum Divisible by Three
 * https://leetcode.com/problems/greatest-sum-divisible-by-three/
 * Difficulty: Medium
 *
 * Given an integer array nums, return the maximum possible sum of elements of the array such
 * that it is divisible by three.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
  const dp = [0, -Infinity, -Infinity];

  for (const num of nums) {
    const prev = [...dp];
    for (let remainder = 0; remainder < 3; remainder++) {
      dp[(remainder + num) % 3] = Math.max(dp[(remainder + num) % 3], prev[remainder] + num);
    }
  }

  return dp[0];
};
