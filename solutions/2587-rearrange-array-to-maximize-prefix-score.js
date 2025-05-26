/**
 * 2587. Rearrange Array to Maximize Prefix Score
 * https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums. You can rearrange the elements of nums to any
 * order (including the given order).
 *
 * Let prefix be the array containing the prefix sums of nums after rearranging it. In other words,
 * prefix[i] is the sum of the elements from 0 to i in nums after rearranging it. The score of nums
 * is the number of positive integers in the array prefix.
 *
 * Return the maximum score you can achieve.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  const sorted = nums.sort((a, b) => b - a);
  let prefixSum = 0;
  let result = 0;

  for (const num of sorted) {
    prefixSum += num;
    if (prefixSum > 0) result++;
    else break;
  }

  return result;
};
