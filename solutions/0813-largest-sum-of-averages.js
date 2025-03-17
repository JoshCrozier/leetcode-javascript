/**
 * 813. Largest Sum of Averages
 * https://leetcode.com/problems/largest-sum-of-averages/
 * Difficulty: Medium
 *
 * You are given an integer array nums and an integer k. You can partition the array into at most
 * k non-empty adjacent subarrays. The score of a partition is the sum of the averages of each
 * subarray.
 *
 * Note that the partition must use every integer in nums, and that the score is not necessarily
 * an integer.
 *
 * Return the maximum score you can achieve of all the possible partitions. Answers within 10-6
 * of the actual answer will be accepted.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function(nums, k) {
  const prefixSum = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  const dp = new Array(nums.length).fill(0).map(() => new Array(k + 1).fill(0));

  for (let i = 0; i < nums.length; i++) {
    dp[i][1] = calculateAverage(i, nums.length - 1);
  }

  for (let partitions = 2; partitions <= k; partitions++) {
    for (let start = 0; start < nums.length - partitions + 1; start++) {
      for (let end = start; end < nums.length - partitions + 1; end++) {
        dp[start][partitions] = Math.max(
          dp[start][partitions],
          calculateAverage(start, end) + dp[end + 1][partitions - 1]
        );
      }
    }
  }

  return dp[0][k];

  function calculateAverage(i, j) {
    return (prefixSum[j + 1] - prefixSum[i]) / (j - i + 1);
  }
};
