/**
 * 1043. Partition Array for Maximum Sum
 * https://leetcode.com/problems/partition-array-for-maximum-sum/
 * Difficulty: Medium
 *
 * Given an integer array arr, partition the array into (contiguous) subarrays of length at most k.
 * After partitioning, each subarray has their values changed to become the maximum value of that
 * subarray.
 *
 * Return the largest sum of the given array after partitioning. Test cases are generated so that
 * the answer fits in a 32-bit integer.
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
  const dp = new Array(arr.length + 1).fill(0);

  for (let i = 1; i <= arr.length; i++) {
    let maxVal = 0;
    for (let j = 1; j <= Math.min(k, i); j++) {
      maxVal = Math.max(maxVal, arr[i - j]);
      dp[i] = Math.max(dp[i], dp[i - j] + maxVal * j);
    }
  }

  return dp[arr.length];
};
