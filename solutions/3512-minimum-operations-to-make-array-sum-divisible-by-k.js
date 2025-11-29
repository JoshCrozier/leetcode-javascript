/**
 * 3512. Minimum Operations to Make Array Sum Divisible by K
 * https://leetcode.com/problems/minimum-operations-to-make-array-sum-divisible-by-k/
 * Difficulty: Easy
 *
 * You are given an integer array nums and an integer k. You can perform the following
 * operation any number of times:
 * - Select an index i and replace nums[i] with nums[i] - 1.
 *
 * Return the minimum number of operations required to make the sum of the array
 * divisible by k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  return nums.reduce((sum, n) => sum + n, 0) % k;
};
