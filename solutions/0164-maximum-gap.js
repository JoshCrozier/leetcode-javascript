/**
 * 164. Maximum Gap
 * https://leetcode.com/problems/maximum-gap/
 * Difficulty: Medium
 *
 * Given an integer array nums, return the maximum difference between two successive elements in
 * its sorted form. If the array contains less than two elements, return 0.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = 1; i < nums.length; i++) {
    result = Math.max(result, nums[i] - nums[i - 1]);
  }
  return result;
};
