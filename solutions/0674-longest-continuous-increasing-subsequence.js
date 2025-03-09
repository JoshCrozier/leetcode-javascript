/**
 * 674. Longest Continuous Increasing Subsequence
 * https://leetcode.com/problems/longest-continuous-increasing-subsequence/
 * Difficulty: Easy
 *
 * Given an unsorted array of integers nums, return the length of the longest continuous increasing
 * subsequence (i.e. subarray). The subsequence must be strictly increasing.
 *
 * A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is
 * [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let result = 1;

  for (let i = 1, v = 1; i < nums.length; i++) {
    v = nums[i] > nums[i-1] ? v + 1 : 1;
    result = Math.max(result, v);
  }

  return result;
};
