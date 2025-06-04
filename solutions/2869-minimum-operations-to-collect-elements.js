/**
 * 2869. Minimum Operations to Collect Elements
 * https://leetcode.com/problems/minimum-operations-to-collect-elements/
 * Difficulty: Easy
 *
 * You are given an array nums of positive integers and an integer k.
 *
 * In one operation, you can remove the last element of the array and add it to your collection.
 *
 * Return the minimum number of operations needed to collect elements 1, 2, ..., k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  const set = new Set();
  let result = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    result++;
    if (nums[i] <= k) set.add(nums[i]);
    if (set.size === k) return result;
  }

  return result;
};
