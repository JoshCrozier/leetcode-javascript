/**
 * 3065. Minimum Operations to Exceed Threshold Value I
 * https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums, and an integer k.
 *
 * In one operation, you can remove one occurrence of the smallest element of nums.
 *
 * Return the minimum number of operations needed so that all elements of the array are greater
 * than or equal to k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  let operations = 0;

  for (const num of nums) {
    if (num < k) operations++;
  }

  return operations;
};
