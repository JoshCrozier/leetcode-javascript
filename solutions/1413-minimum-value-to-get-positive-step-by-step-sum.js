/**
 * 1413. Minimum Value to Get Positive Step by Step Sum
 * https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
 * Difficulty: Easy
 *
 * Given an array of integers nums, you start with an initial positive value startValue.
 *
 * In each iteration, you calculate the step by step sum of startValue plus elements in
 * nums (from left to right).
 *
 * Return the minimum positive value of startValue such that the step by step sum is never
 * less than 1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  let minSum = 0;
  let currentSum = 0;

  for (const num of nums) {
    currentSum += num;
    minSum = Math.min(minSum, currentSum);
  }

  return Math.max(1, 1 - minSum);
};
