/**
 * 2393. Count Strictly Increasing Subarrays
 * https://leetcode.com/problems/count-strictly-increasing-subarrays/
 * Difficulty: Medium
 *
 * You are given an array nums consisting of positive integers.
 *
 * Return the number of subarrays of nums that are in strictly increasing order.
 *
 * A subarray is a contiguous part of an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
  let result = 0;
  let currentLength = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentLength++;
    } else {
      result += (currentLength * (currentLength + 1)) / 2;
      currentLength = 1;
    }
  }

  result += (currentLength * (currentLength + 1)) / 2;

  return result;
};
