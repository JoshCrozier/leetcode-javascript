/**
 * 312. Burst Balloons
 * https://leetcode.com/problems/burst-balloons/
 * Difficulty: Hard
 *
 * You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number
 * on it represented by an array nums. You are asked to burst all the balloons.
 *
 * If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins.
 * If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a
 * balloon with a 1 painted on it.
 *
 * Return the maximum coins you can collect by bursting the balloons wisely.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  const track = [1, ...nums, 1];
  const dp = new Array(nums.length + 2).fill().map(() => new Array(nums.length + 2).fill(0));

  for (let count = 1; count <= nums.length; count++) {
    for (let i = 1; i <= nums.length - count + 1; i++) {
      const j = i + count - 1;
      for (let k = i; k <= j; k++) {
        dp[i - 1][j + 1] = Math.max(
          dp[i - 1][j + 1],
          dp[i - 1][k] + dp[k][j + 1] + track[i - 1] * track[k] * track[j + 1]
        );
      }
    }
  }

  return dp[0][nums.length + 1];
};
