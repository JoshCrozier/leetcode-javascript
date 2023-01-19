/**
 * 2535. Difference Between Element Sum and Digit Sum of an Array
 * https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
 * Difficulty: Easy
 *
 * You are given a positive integer array nums:
 * - The element sum is the sum of all the elements in nums.
 * - The digit sum is the sum of all the digits (not necessarily distinct)
 *   that appear in nums.
 *
 * Return the absolute difference between the element sum and digit sum of nums.
 * Note that the absolute difference between two integers x and y is defined
 * as |x - y|.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  const sum = input => input.reduce((sum, n) => sum + +n, 0);
  return Math.abs(sum(nums) - sum(nums.join('').split('')));
};
