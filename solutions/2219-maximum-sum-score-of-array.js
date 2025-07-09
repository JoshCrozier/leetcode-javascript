/**
 * 2219. Maximum Sum Score of Array
 * https://leetcode.com/problems/maximum-sum-score-of-array/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums of length n.
 *
 * The sum score of nums at an index i where 0 <= i < n is the maximum of:
 * - The sum of the first i + 1 elements of nums.
 * - The sum of the last n - i elements of nums.
 *
 * Return the maximum sum score of nums at any index.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSumScore = function(nums) {
  const n = nums.length;
  const totalSum = nums.reduce((sum, num) => sum + num, 0);
  let prefixSum = 0;
  let maxScore = -Infinity;

  for (let i = 0; i < n; i++) {
    prefixSum += nums[i];
    const suffixSum = totalSum - prefixSum + nums[i];
    const score = Math.max(prefixSum, suffixSum);
    maxScore = Math.max(maxScore, score);
  }

  return maxScore;
};
