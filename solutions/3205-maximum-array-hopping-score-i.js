/**
 * 3205. Maximum Array Hopping Score I
 * https://leetcode.com/problems/maximum-array-hopping-score-i/
 * Difficulty: Medium
 *
 * Given an array nums, you have to get the maximum score starting from index 0 and
 * hopping until you reach the last element of the array.
 *
 * In each hop, you can jump from index i to an index j > i, and you get a score of
 * (j - i) * nums[j].
 *
 * Return the maximum score you can get.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  const n = nums.length;
  const dp = new Array(n).fill(-Infinity);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    if (dp[i] === -Infinity) continue;

    for (let j = i + 1; j < n; j++) {
      const jumpScore = (j - i) * nums[j];
      dp[j] = Math.max(dp[j], dp[i] + jumpScore);
    }
  }

  return dp[n - 1];
};
