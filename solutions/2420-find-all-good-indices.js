/**
 * 2420. Find All Good Indices
 * https://leetcode.com/problems/find-all-good-indices/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums of size n and a positive integer k.
 *
 * We call an index i in the range k <= i < n - k good if the following conditions are satisfied:
 * - The k elements that are just before the index i are in non-increasing order.
 * - The k elements that are just after the index i are in non-decreasing order.
 *
 * Return an array of all good indices sorted in increasing order.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var goodIndices = function(nums, k) {
  const n = nums.length;
  const nonIncreasing = new Array(n).fill(1);
  const nonDecreasing = new Array(n).fill(1);
  const result = [];

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] >= nums[i]) {
      nonIncreasing[i] = nonIncreasing[i - 1] + 1;
    }
    if (nums[n - i] >= nums[n - i - 1]) {
      nonDecreasing[n - i - 1] = nonDecreasing[n - i] + 1;
    }
  }

  for (let i = k; i < n - k; i++) {
    if (nonIncreasing[i - 1] >= k && nonDecreasing[i + 1] >= k) {
      result.push(i);
    }
  }

  return result;
};
