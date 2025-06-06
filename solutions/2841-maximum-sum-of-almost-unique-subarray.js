/**
 * 2841. Maximum Sum of Almost Unique Subarray
 * https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/
 * Difficulty: Medium
 *
 * You are given an integer array nums and two positive integers m and k.
 *
 * Return the maximum sum out of all almost unique subarrays of length k of nums. If no such
 * subarray exists, return 0.
 *
 * A subarray of nums is almost unique if it contains at least m distinct elements.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, m, k) {
  const map = new Map();
  let subarraySum = 0;
  let result = 0;

  for (let i = 0; i < k; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    subarraySum += nums[i];
  }

  if (map.size >= m) {
    result = subarraySum;
  }

  for (let i = k; i < nums.length; i++) {
    map.set(nums[i - k], map.get(nums[i - k]) - 1);
    if (map.get(nums[i - k]) === 0) {
      map.delete(nums[i - k]);
    }

    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    subarraySum = subarraySum - nums[i - k] + nums[i];

    if (map.size >= m) {
      result = Math.max(result, subarraySum);
    }
  }

  return result;
};
