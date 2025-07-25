/**
 * 3487. Maximum Unique Subarray Sum After Deletion
 * https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/
 * Difficulty: Easy
 *
 * You are given an integer array nums.
 *
 * You are allowed to delete any number of elements from nums without making it empty.
 * After performing the deletions, select a subarray of nums such that:
 * 1. All elements in the subarray are unique.
 * 2. The sum of the elements in the subarray is maximized.
 *
 * Return the maximum sum of such a subarray.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
  const uniqueValues = [...new Set(nums)];
  const positiveValues = uniqueValues.filter(val => val > 0);

  if (positiveValues.length === 0) {
    return Math.max(...uniqueValues);
  }

  return positiveValues.reduce((sum, val) => sum + val, 0);
};
