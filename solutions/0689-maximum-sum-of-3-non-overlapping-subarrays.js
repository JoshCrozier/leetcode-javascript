/**
 * 689. Maximum Sum of 3 Non-Overlapping Subarrays
 * https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/
 * Difficulty: Hard
 *
 * Given an integer array nums and an integer k, find three non-overlapping subarrays of
 * length k with maximum sum and return them.
 *
 * Return the result as a list of indices representing the starting position of each
 * interval (0-indexed). If there are multiple answers, return the lexicographically
 * smallest one.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
  const n = nums.length;
  let [sumFirst, sumSecond, sumThird] = [0, 0, 0];
  let [maxFirst, maxFirstSecond, maxTotal] = [0, 0, 0];
  let [startFirst, startFirstBest, startSecondBest] = [0, 0, k];
  let result = [0, k, 2 * k];

  for (let i = 0; i < k; i++) {
    sumFirst += nums[i];
    sumSecond += nums[i + k];
    sumThird += nums[i + 2 * k];
  }
  [maxFirst, maxFirstSecond, maxTotal] = [
    sumFirst, sumFirst + sumSecond,
    sumFirst + sumSecond + sumThird
  ];

  for (let i = 1; i <= n - 3 * k; i++) {
    sumFirst += nums[i + k - 1] - nums[i - 1];
    sumSecond += nums[i + 2 * k - 1] - nums[i + k - 1];
    sumThird += nums[i + 3 * k - 1] - nums[i + 2 * k - 1];

    if (sumFirst > maxFirst) [maxFirst, startFirst] = [sumFirst, i];
    if (maxFirst + sumSecond > maxFirstSecond) {
      [maxFirstSecond, startFirstBest, startSecondBest] = [maxFirst + sumSecond, startFirst, i + k];
    }
    if (maxFirstSecond + sumThird > maxTotal) {
      [maxTotal, ...result] = [
        maxFirstSecond + sumThird,
        startFirstBest,
        startSecondBest, i + 2 * k
      ];
    }
  }

  return result;
};
