/**
 * 1121. Divide Array Into Increasing Sequences
 * https://leetcode.com/problems/divide-array-into-increasing-sequences/
 * Difficulty: Hard
 *
 * Given an integer array nums sorted in non-decreasing order and an integer k, return true
 * if this array can be divided into one or more disjoint increasing subsequences of length
 * at least k, or false otherwise.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canDivideIntoSubsequences = function(nums, k) {
  let maxFrequency = 0;
  let currentFrequency = 1;

  for (let i = 1; i < nums.length; i++) {
    currentFrequency = nums[i] === nums[i - 1] ? currentFrequency + 1 : 1;
    maxFrequency = Math.max(maxFrequency, currentFrequency);
  }

  return k * maxFrequency <= nums.length;
};
