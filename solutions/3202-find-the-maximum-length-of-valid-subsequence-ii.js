/**
 * 3202. Find the Maximum Length of Valid Subsequence II
 * https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/
 * Difficulty: Medium
 *
 * You are given an integer array nums and a positive integer k.
 *
 * A subsequence sub of nums with length x is called valid if it satisfies:
 * - (sub[0] + sub[1]) % k == (sub[1] + sub[2]) % k == ... == (sub[x - 2] + sub[x - 1]) % k.
 *
 * Return the length of the longest valid subsequence of nums.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {
  let result = 0;

  for (let target = 0; target < k; target++) {
    const dp = new Array(k).fill(0);

    for (const num of nums) {
      const mod = num % k;
      const prev = (target - mod + k) % k;
      dp[mod] = Math.max(dp[mod], dp[prev] + 1);
    }

    result = Math.max(result, Math.max(...dp));
  }

  return result;
};
