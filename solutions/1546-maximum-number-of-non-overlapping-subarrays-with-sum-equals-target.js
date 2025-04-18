/**
 * 1546. Maximum Number of Non-Overlapping Subarrays With Sum Equals Target
 * https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/
 * Difficulty: Medium
 *
 * Given an array nums and an integer target, return the maximum number of non-empty non-overlapping
 * subarrays such that the sum of values in each subarray is equal to target.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maxNonOverlapping = function(nums, target) {
  const prefixSums = new Map();
  let currentSum = 0;
  let result = 0;
  prefixSums.set(0, 0);

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    if (prefixSums.has(currentSum - target)) {
      result++;
      prefixSums.clear();
      prefixSums.set(0, i + 1);
      currentSum = 0;
    } else {
      prefixSums.set(currentSum, i + 1);
    }
  }

  return result;
};
