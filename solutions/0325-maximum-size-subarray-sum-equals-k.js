/**
 * 325. Maximum Size Subarray Sum Equals k
 * https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/
 * Difficulty: Medium
 *
 * Given an integer array nums and an integer k, return the maximum length of a subarray that
 * sums to k. If there is not one, return 0 instead.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
  const sumIndex = new Map([[0, -1]]);
  let currentSum = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (sumIndex.has(currentSum - k)) {
      result = Math.max(result, i - sumIndex.get(currentSum - k));
    }
    if (!sumIndex.has(currentSum)) {
      sumIndex.set(currentSum, i);
    }
  }

  return result;
};
