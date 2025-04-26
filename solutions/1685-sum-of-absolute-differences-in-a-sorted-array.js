/**
 * 1685. Sum of Absolute Differences in a Sorted Array
 * https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/
 * Difficulty: Medium
 *
 * You are given an integer array nums sorted in non-decreasing order.
 *
 * Build and return an integer array result with the same length as nums such that result[i] is
 * equal to the summation of absolute differences between nums[i] and all the other elements
 * in the array.
 *
 * In other words, result[i] is equal to sum(|nums[i]-nums[j]|) where 0 <= j < nums.length
 * and j != i (0-indexed).
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
  const n = nums.length;
  const result = new Array(n);
  let prefixSum = 0;
  let suffixSum = nums.reduce((sum, num) => sum + num, 0);

  for (let i = 0; i < n; i++) {
    const current = nums[i];
    suffixSum -= current;
    result[i] = (current * i - prefixSum) + (suffixSum - current * (n - 1 - i));
    prefixSum += current;
  }

  return result;
};
