/**
 * 55. Jump Game
 * https://leetcode.com/problems/jump-game/
 * Difficulty: Medium
 *
 * You are given an integer array nums. You are initially positioned at the
 * array's first index, and each element in the array represents your maximum
 * jump length at that position.
 *
 * Return true if you can reach the last index, or false otherwise.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (max < i) {
      return false;
    }
    max = Math.max(nums[i] + i, max);
  }

  return true;
};
