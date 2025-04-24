/**
 * 2799. Count Complete Subarrays in an Array
 * https://leetcode.com/problems/count-complete-subarrays-in-an-array/
 * Difficulty: Medium
 *
 * You are given an array nums consisting of positive integers.
 *
 * We call a subarray of an array complete if the following condition is satisfied:
 * - The number of distinct elements in the subarray is equal to the number of distinct
 *   elements in the whole array.
 *
 * Return the number of complete subarrays.
 *
 * A subarray is a contiguous non-empty part of an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
  const totalDistinct = new Set(nums).size;
  const frequency = new Map();
  let completeCount = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    frequency.set(nums[right], (frequency.get(nums[right]) || 0) + 1);

    while (frequency.size === totalDistinct) {
      completeCount += nums.length - right;
      const leftNum = nums[left];
      frequency.set(leftNum, frequency.get(leftNum) - 1);
      if (frequency.get(leftNum) === 0) {
        frequency.delete(leftNum);
      }
      left++;
    }
  }

  return completeCount;
};
