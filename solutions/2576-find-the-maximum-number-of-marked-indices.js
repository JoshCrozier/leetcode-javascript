/**
 * 2576. Find the Maximum Number of Marked Indices
 * https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums.
 *
 * Initially, all of the indices are unmarked. You are allowed to make this operation any
 * number of times:
 * - Pick two different unmarked indices i and j such that 2 * nums[i] <= nums[j], then
 *   mark i and j.
 *
 * Return the maximum possible number of marked indices in nums using the above operation
 * any number of times.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function(nums) {
  nums.sort((a, b) => a - b);
  let result = 0;
  let left = 0;
  let right = Math.floor(nums.length / 2);

  while (left < Math.floor(nums.length / 2) && right < nums.length) {
    if (2 * nums[left] <= nums[right]) {
      result += 2;
      left++;
      right++;
    } else {
      right++;
    }
  }

  return result;
};
