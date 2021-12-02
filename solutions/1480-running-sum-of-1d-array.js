/**
 * 1480. Running Sum of 1d Array
 * https://leetcode.com/problems/running-sum-of-1d-array/
 * Difficulty: Easy
 *
 * Given an array nums. We define a running sum of an array as
 * runningSum[i] = sum(nums[0]…nums[i]).
 *
 * Return the running sum of nums.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums;
};
