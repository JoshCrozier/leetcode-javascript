/**
 * 303. Range Sum Query - Immutable
 * https://leetcode.com/problems/range-sum-query-immutable/
 * Difficulty: Easy
 *
 * Given an integer array nums, handle multiple queries of the following type:
 * - Calculate the sum of the elements of nums between indices left and right inclusive
 *   where left <= right.
 *
 * Implement the NumArray class:
 * - NumArray(int[] nums) Initializes the object with the integer array nums.
 * - int sumRange(int left, int right) Returns the sum of the elements of nums between
 *   indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.nums.slice(left, right + 1).reduce((sum, n) => sum + n, 0);
};
