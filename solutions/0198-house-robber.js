/**
 * 198. House Robber
 * https://leetcode.com/problems/house-robber/
 * Difficulty: Medium
 *
 * You are a professional robber planning to rob houses along a street. Each house has a certain
 * amount of money stashed, the only constraint stopping you from robbing each of them is that
 * adjacent houses have security systems connected and it will automatically contact the police
 * if two adjacent houses were broken into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house, return the maximum
 * amount of money you can rob tonight without alerting the police.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let previous = 0;
  let current = 0;

  for (const n of nums) {
    const temp = previous;
    previous = current;
    current = Math.max(temp + n, previous);
  }

  return Math.max(current, previous);
};
