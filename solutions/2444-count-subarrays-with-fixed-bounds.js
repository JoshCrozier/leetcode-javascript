/**
 * 2444. Count Subarrays With Fixed Bounds
 * https://leetcode.com/problems/count-subarrays-with-fixed-bounds/
 * Difficulty: Hard
 *
 * You are given an integer array nums and two integers minK and maxK.
 *
 * A fixed-bound subarray of nums is a subarray that satisfies the following conditions:
 * - The minimum value in the subarray is equal to minK.
 * - The maximum value in the subarray is equal to maxK.
 * - Return the number of fixed-bound subarrays.
 *
 * A subarray is a contiguous part of an array.
 */

/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
  let result = 0;

  for (let i = 0, minIndex = -1, maxIndex = -1, invalidIndex = -1; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) {
      invalidIndex = i;
    }
    if (nums[i] === minK) {
      minIndex = i;
    }
    if (nums[i] === maxK) {
      maxIndex = i;
    }
    result += Math.max(0, Math.min(minIndex, maxIndex) - invalidIndex);
  }

  return result;
};
