/**
 * 2016. Maximum Difference Between Increasing Elements
 * https://leetcode.com/problems/maximum-difference-between-increasing-elements/
 * Difficulty: Easy
 *
 * Given a 0-indexed integer array nums of size n, find the maximum difference
 * between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that
 * 0 <= i < j < n and nums[i] < nums[j].
 *
 * Return the maximum difference. If no such i and j exists, return -1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
  let max = 0;

  for (let i = 0, min = nums[0]; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i] - min);
  }

  return max === 0 ? -1 : max;
};
