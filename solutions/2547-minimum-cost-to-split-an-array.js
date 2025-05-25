/**
 * 2547. Minimum Cost to Split an Array
 * https://leetcode.com/problems/minimum-cost-to-split-an-array/
 * Difficulty: Hard
 *
 * You are given an integer array nums and an integer k.
 *
 * Split the array into some number of non-empty subarrays. The cost of a split is the sum of
 * the importance value of each subarray in the split.
 *
 * Let trimmed(subarray) be the version of the subarray where all numbers which appear only
 * once are removed.
 * - For example, trimmed([3,1,2,4,3,4]) = [3,4,3,4].
 *
 * The importance value of a subarray is k + trimmed(subarray).length.
 * - For example, if a subarray is [1,2,3,3,3,4,4], then trimmed([1,2,3,3,3,4,4]) = [3,3,3,4,4].
 *   The importance value of this subarray will be k + 5.
 *
 * Return the minimum possible cost of a split of nums.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCost = function(nums, k) {
  const n = nums.length;
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let end = 1; end <= n; end++) {
    const freq = new Map();
    let trimLen = 0;
    for (let start = end - 1; start >= 0; start--) {
      const num = nums[start];
      const count = (freq.get(num) || 0) + 1;
      freq.set(num, count);
      if (count === 1) trimLen++;
      if (count === 2) trimLen--;
      dp[end] = Math.min(dp[end], dp[start] + k + (end - start - trimLen));
    }
  }

  return dp[n];
};
