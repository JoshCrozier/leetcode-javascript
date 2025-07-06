/**
 * 1918. Kth Smallest Subarray Sum
 * https://leetcode.com/problems/kth-smallest-subarray-sum/
 * Difficulty: Medium
 *
 * Given an integer array nums of length n and an integer k, return the kth smallest subarray sum.
 *
 * A subarray is defined as a non-empty contiguous sequence of elements in an array. A subarray
 * sum is the sum of all elements in the subarray.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kthSmallestSubarraySum = function(nums, k) {
  let result = Math.min(...nums);
  let maxSum = nums.reduce((sum, num) => sum + num, 0);

  while (result < maxSum) {
    const midSum = Math.floor((result + maxSum) / 2);

    if (countSubarraysWithSumLessOrEqual(midSum) < k) {
      result = midSum + 1;
    } else {
      maxSum = midSum;
    }
  }

  return result;

  function countSubarraysWithSumLessOrEqual(target) {
    let count = 0;
    let left = 0;
    let currentSum = 0;

    for (let right = 0; right < nums.length; right++) {
      currentSum += nums[right];

      while (currentSum > target) {
        currentSum -= nums[left];
        left++;
      }

      count += right - left + 1;
    }

    return count;
  }
};
