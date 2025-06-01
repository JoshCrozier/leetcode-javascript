/**
 * 2740. Find the Value of the Partition
 * https://leetcode.com/problems/find-the-value-of-the-partition/
 * Difficulty: Medium
 *
 * You are given a positive integer array nums.
 *
 * Partition nums into two arrays, nums1 and nums2, such that:
 * - Each element of the array nums belongs to either the array nums1 or the array nums2.
 * - Both arrays are non-empty.
 * - The value of the partition is minimized.
 *
 * The value of the partition is |max(nums1) - min(nums2)|.
 *
 * Here, max(nums1) denotes the maximum element of the array nums1, and min(nums2) denotes the
 * minimum element of the array nums2.
 *
 * Return the integer denoting the value of such partition.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function(nums) {
  nums.sort((a, b) => a - b);
  let result = Infinity;

  for (let i = 1; i < nums.length; i++) {
    result = Math.min(result, nums[i] - nums[i - 1]);
  }

  return result;
};
