/**
 * 1852. Distinct Numbers in Each Subarray
 * https://leetcode.com/problems/distinct-numbers-in-each-subarray/
 * Difficulty: Medium
 *
 * You are given an integer array nums of length n and an integer k. Your task is to find
 * the number of distinct elements in every subarray of size k within nums.
 *
 * Return an array ans such that ans[i] is the count of distinct elements in
 * nums[i..(i + k - 1)] for each index 0 <= i < n - k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var distinctNumbers = function(nums, k) {
  const result = [];
  const map = new Map();

  for (let i = 0; i < k; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  result.push(map.size);

  for (let i = k; i < nums.length; i++) {
    const leftElement = nums[i - k];
    const rightElement = nums[i];

    map.set(leftElement, map.get(leftElement) - 1);
    if (map.get(leftElement) === 0) {
      map.delete(leftElement);
    }

    map.set(rightElement, (map.get(rightElement) || 0) + 1);

    result.push(map.size);
  }

  return result;
};
