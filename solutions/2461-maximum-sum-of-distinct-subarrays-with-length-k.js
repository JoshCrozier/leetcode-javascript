/**
 * 2461. Maximum Sum of Distinct Subarrays With Length K
 * https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/
 * Difficulty: Medium
 *
 * You are given an integer array nums and an integer k. Find the maximum subarray sum of all the
 * subarrays of nums that meet the following conditions:
 * - The length of the subarray is k, and
 * - All the elements of the subarray are distinct.
 *
 * Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray
 * meets the conditions, return 0.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
  let result = 0;
  const seen = new Map();
  let windowSum = 0;

  for (let i = 0; i < nums.length; i++) {
    seen.set(nums[i], (seen.get(nums[i]) || 0) + 1);
    windowSum += nums[i];

    if (i >= k - 1) {
      if (seen.size === k) {
        result = Math.max(result, windowSum);
      }
      const leftNum = nums[i - k + 1];
      windowSum -= leftNum;
      seen.set(leftNum, seen.get(leftNum) - 1);
      if (seen.get(leftNum) === 0) {
        seen.delete(leftNum);
      }
    }
  }

  return result;
};
