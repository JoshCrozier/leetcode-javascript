/**
 * 3423. Maximum Difference Between Adjacent Elements in a Circular Array
 * https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/
 * Difficulty: Easy
 *
 * Given a circular array nums, find the maximum absolute difference between adjacent elements.
 *
 * Note: In a circular array, the first and last elements are adjacent.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const next = (i + 1) % nums.length;
    const diff = Math.abs(nums[i] - nums[next]);
    result = Math.max(result, diff);
  }

  return result;
};
