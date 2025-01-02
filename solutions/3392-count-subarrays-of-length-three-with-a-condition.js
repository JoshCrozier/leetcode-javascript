/**
 * 3392. Count Subarrays of Length Three With a Condition
 * https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/
 * Difficulty: Easy
 *
 * Given an integer array nums, return the number of subarrays of length 3 such that
 * the sum of the first and third numbers equals exactly half of the second number.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + nums[i + 2] === nums[i + 1] / 2) {
      count++;
    }
  }
  return count;
};
