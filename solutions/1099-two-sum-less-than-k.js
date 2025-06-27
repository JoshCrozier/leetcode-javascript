/**
 * 1099. Two Sum Less Than K
 * https://leetcode.com/problems/two-sum-less-than-k/
 * Difficulty: Easy
 *
 * Given an array nums of integers and integer k, return the maximum sum such that there
 * exists i < j with nums[i] + nums[j] = sum and sum < k. If no i, j exist satisfying
 * this equation, return -1.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let result = -1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum < k) {
      result = Math.max(result, sum);
      left++;
    } else {
      right--;
    }
  }

  return result;
};
