/**
 * 2104. Sum of Subarray Ranges
 * https://leetcode.com/problems/sum-of-subarray-ranges/
 * Difficulty: Medium
 *
 * You are given an integer array nums. The range of a subarray of nums is the difference between
 * the largest and smallest element in the subarray.
 *
 * Return the sum of all subarray ranges of nums.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let max = nums[i];

    for (let j = i; j < nums.length; j++) {
      min = Math.min(min, nums[j]);
      max = Math.max(max, nums[j]);
      result += max - min;
    }
  }

  return result;
};
