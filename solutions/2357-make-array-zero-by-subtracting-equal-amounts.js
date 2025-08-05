/**
 * 2357. Make Array Zero by Subtracting Equal Amounts
 * https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/
 * Difficulty: Easy
 *
 * You are given a non-negative integer array nums. In one operation, you must:
 * - Choose a positive integer x such that x is less than or equal to the smallest
 *   non-zero element in nums.
 * - Subtract x from every positive element in nums.
 *
 * Return the minimum number of operations to make every element in nums equal to 0.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  return new Set(nums.filter(num => num > 0)).size;
};
