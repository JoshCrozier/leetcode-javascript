/**
 * 2962. Count Subarrays Where Max Element Appears at Least K Times
 * https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/
 * Difficulty: Medium
 *
 * You are given an integer array nums and a positive integer k.
 *
 * Return the number of subarrays where the maximum element of nums appears at least k times in
 * that subarray.
 *
 * A subarray is a contiguous sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  const maxNum = Math.max(...nums);
  let maxCount = 0;
  let left = 0;
  let result = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === maxNum) maxCount++;
    while (maxCount >= k) {
      result += nums.length - right;
      if (nums[left] === maxNum) maxCount--;
      left++;
    }
  }

  return result;
};
