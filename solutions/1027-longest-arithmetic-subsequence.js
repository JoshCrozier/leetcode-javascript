/**
 * 1027. Longest Arithmetic Subsequence
 * https://leetcode.com/problems/longest-arithmetic-subsequence/
 * Difficulty: Medium
 *
 * Given an array nums of integers, return the length of the longest arithmetic
 * subsequence in nums.
 *
 * Note that:
 * - A subsequence is an array that can be derived from another array by deleting some
 *   or no elements without changing the order of the remaining elements.
 * - A sequence seq is arithmetic if seq[i + 1] - seq[i] are all the same value
 *   (for 0 <= i < seq.length - 1).
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
  const dp = new Array(nums.length).fill().map(() => new Map());
  let result = 2;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const prevLength = dp[j].get(diff) || 1;
      dp[i].set(diff, prevLength + 1);
      result = Math.max(result, prevLength + 1);
    }
  }

  return result;
};
