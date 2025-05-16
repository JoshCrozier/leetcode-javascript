/**
 * 2200. Find All K-Distant Indices in an Array
 * https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums and two integers key and k. A k-distant index
 * is an index i of nums for which there exists at least one index j such that |i - j| <= k
 * and nums[j] == key.
 *
 * Return a list of all k-distant indices sorted in increasing order.
 */

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
  const result = new Set();

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === key) {
      for (let i = Math.max(0, j - k); i <= Math.min(nums.length - 1, j + k); i++) {
        result.add(i);
      }
    }
  }

  return [...result].sort((a, b) => a - b);
};
