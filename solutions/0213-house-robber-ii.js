/**
 * 213. House Robber II
 * https://leetcode.com/problems/house-robber-ii/
 * Difficulty: Medium
 *
 * You are a professional robber planning to rob houses along a street. Each house has a certain
 * amount of money stashed. All houses at this place are arranged in a circle. That means the
 * first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system
 * connected, and it will automatically contact the police if two adjacent houses were broken into
 * on the same night.
 *
 * Given an integer array nums representing the amount of money of each house, return the maximum
 * amount of money you can rob tonight without alerting the police.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  return Math.max(
    handlePermutation(nums, 0, nums.length - 1),
    handlePermutation(nums, 1, nums.length)
  );
};

function handlePermutation(nums, start, end) {
  let previous = 0, current = 0;

  for (let i = start; i < end; i++) {
    const temp = previous;
    previous = current;
    current = Math.max(temp + nums[i], previous);
  }

  return Math.max(current, previous);
}
