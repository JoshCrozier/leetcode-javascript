/**
 * 2874. Maximum Value of an Ordered Triplet II
 * https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums.
 *
 * Return the maximum value over all triplets of indices (i, j, k) such that i < j < k. If all
 * such triplets have a negative value, return 0.
 *
 * The value of a triplet of indices (i, j, k) is equal to (nums[i] - nums[j]) * nums[k].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
  let result = 0;
  let maxNum = nums[0];
  let maxDiff = 0;

  for (let i = 1; i < nums.length; i++) {
    result = Math.max(result, maxDiff * nums[i]);
    maxDiff = Math.max(maxDiff, maxNum - nums[i]);
    maxNum = Math.max(maxNum, nums[i]);
  }

  return result;
};
