/**
 * 2099. Find Subsequence of Length K With the Largest Sum
 * https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/
 * Difficulty: Medium
 *
 * You are given an integer array nums and an integer k. You want to find a subsequence
 * of nums of length k that has the largest sum.
 *
 * Return any such subsequence as an integer array of length k.
 *
 * A subsequence is an array that can be derived from another array by deleting some or
 * no elements without changing the order of the remaining elements.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
  const map = new Map();
  nums.slice()
      .sort((a, b) => a - b)
      .slice(-k)
      .forEach(n => map.set(n, (map.get(n) || 0) + 1));

  return nums.filter(n => {
    const isInSubsequence = map.get(n);

    if (isInSubsequence) {
      map.set(n, map.get(n) - 1);
    }

    return isInSubsequence;
  });
};
