/**
 * 644. Maximum Average Subarray II
 * https://leetcode.com/problems/maximum-average-subarray-ii/
 * Difficulty: Hard
 *
 * You are given an integer array nums consisting of n elements, and an integer k.
 *
 * Find a contiguous subarray whose length is greater than or equal to k that has the maximum
 * average value and return this value. Any answer with a calculation error less than 10-5 will
 * be accepted.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  const n = nums.length;
  let minVal = Math.min(...nums);
  let maxVal = Math.max(...nums);

  while (maxVal - minVal > 1e-5) {
    const mid = (minVal + maxVal) / 2;
    if (canFindLargerAverage(nums, k, mid)) {
      minVal = mid;
    } else {
      maxVal = mid;
    }
  }

  return minVal;
};

function canFindLargerAverage(nums, k, target) {
  let sum = 0;
  let prevSum = 0;
  let minPrevSum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i] - target;
  }

  if (sum >= 0) return true;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - target;
    prevSum += nums[i - k] - target;
    minPrevSum = Math.min(minPrevSum, prevSum);
    if (sum - minPrevSum >= 0) return true;
  }

  return false;
}
