/**
 * 1708. Largest Subarray Length K
 * https://leetcode.com/problems/largest-subarray-length-k/
 * Difficulty: Easy
 *
 * An array A is larger than some array B if for the first index i where A[i] != B[i], A[i] > B[i].
 *
 * For example, consider 0-indexing:
 * - [1,3,2,4] > [1,2,2,4], since at index 1, 3 > 2.
 * - [1,4,4,4] < [2,1,1,1], since at index 0, 1 < 2.
 *
 * A subarray is a contiguous subsequence of the array.
 *
 * Given an integer array nums of distinct integers, return the largest subarray of nums of
 * length k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var largestSubarray = function(nums, k) {
  let maxStartIndex = 0;

  for (let i = 1; i <= nums.length - k; i++) {
    if (nums[i] > nums[maxStartIndex]) {
      maxStartIndex = i;
    }
  }

  return nums.slice(maxStartIndex, maxStartIndex + k);
};
