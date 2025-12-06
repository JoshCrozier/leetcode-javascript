/**
 * 3578. Count Partitions With Max-Min Difference at Most K
 * https://leetcode.com/problems/count-partitions-with-max-min-difference-at-most-k
 * Difficulty: Medium
 *
 * You are given an integer array nums and an integer k. Your task is to partition nums
 * into one or more non-empty contiguous segments such that in each segment, the difference
 * between its maximum and minimum elements is at most k.
 *
 * Return the total number of ways to partition nums under this condition.
 *
 * Since the answer may be too large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPartitions = function(nums, k) {
  const MOD = 1e9 + 7;
  const n = nums.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  let sum = 1;
  const minQueue = [];
  const maxQueue = [];

  for (let left = 0, right = 0; right < n; right++) {
    while (maxQueue.length && nums[right] > nums[maxQueue.at(-1)]) maxQueue.pop();
    maxQueue.push(right);

    while (minQueue.length && nums[right] < nums[minQueue.at(-1)]) minQueue.pop();
    minQueue.push(right);

    while (nums[maxQueue[0]] - nums[minQueue[0]] > k) {
      sum = (sum - dp[left++] + MOD) % MOD;
      if (minQueue[0] < left) minQueue.shift();
      if (maxQueue[0] < left) maxQueue.shift();
    }

    dp[right + 1] = sum;
    sum = (sum + dp[right + 1]) % MOD;
  }

  return dp[n];
};
