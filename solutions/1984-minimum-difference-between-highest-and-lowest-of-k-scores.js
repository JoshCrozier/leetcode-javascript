/**
 * 1984. Minimum Difference Between Highest and Lowest of K Scores
 * https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums, where nums[i] represents the score of the
 * ith student. You are also given an integer k.
 *
 * Pick the scores of any k students from the array so that the difference between the highest
 * and the lowest of the k scores is minimized.
 *
 * Return the minimum possible difference.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
  nums.sort((a, b) => a - b);
  let result = Infinity;

  for (let i = 0; i <= nums.length - k; i++) {
    result = Math.min(result, nums[i + k - 1] - nums[i]);
  }

  return result;
};
