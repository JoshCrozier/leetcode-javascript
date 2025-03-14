/**
 * 775. Global and Local Inversions
 * https://leetcode.com/problems/global-and-local-inversions/
 * Difficulty: Medium
 *
 * You are given an integer array nums of length n which represents a permutation of all the
 * integers in the range [0, n - 1].
 *
 * The number of global inversions is the number of the different pairs (i, j) where:
 * - 0 <= i < j < n
 * - nums[i] > nums[j]
 *
 * The number of local inversions is the number of indices i where:
 * - 0 <= i < n - 1
 * - nums[i] > nums[i + 1]
 *
 * Return true if the number of global inversions is equal to the number of local inversions.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i] - i) > 1) {
      return false;
    }
  }
  return true;
};
