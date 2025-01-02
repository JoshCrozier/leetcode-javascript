/**
 * 3397. Maximum Number of Distinct Elements After Operations
 * https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/
 * Difficulty: Medium
 *
 * You are given an integer array nums and an integer k.
 *
 * You are allowed to perform the following operation on each element of the array at most once:
 * - Add an integer in the range [-k, k] to the element.
 *
 * Return the maximum possible number of distinct elements in nums after performing the operations.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function(nums, k) {
  nums.sort((a, b) => a - b);
  let last = nums[0] - k;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (last + 1 > nums[i] + k) continue;
    last = Math.max(last + 1, nums[i] - k);
    count++;
  }

  return count;
};
