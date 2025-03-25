/**
 * 915. Partition Array into Disjoint Intervals
 * https://leetcode.com/problems/partition-array-into-disjoint-intervals/
 * Difficulty: Medium
 *
 * Given an integer array nums, partition it into two (contiguous) subarrays left and right so that:
 * - Every element in left is less than or equal to every element in right.
 * - left and right are non-empty.
 * - left has the smallest possible size.
 *
 * Return the length of left after such a partitioning.
 *
 * Test cases are generated such that partitioning exists.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
  let leftMax = nums[0];
  let currentMax = nums[0];
  let partitionIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < leftMax) {
      partitionIndex = i;
      leftMax = currentMax;
    }
    currentMax = Math.max(currentMax, nums[i]);
  }

  return partitionIndex + 1;
};
