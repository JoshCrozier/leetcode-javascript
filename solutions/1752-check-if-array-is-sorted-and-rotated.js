/**
 * 1752. Check if Array Is Sorted and Rotated
 * https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
 * Difficulty: Easy
 *
 * Given an array nums, return true if the array was originally sorted in non-decreasing
 * order, then rotated some number of positions (including zero). Otherwise, return false.
 *
 * There may be duplicates in the original array.
 *
 * Note: An array A rotated by x positions results in an array B of the same length such
 * that A[i] == B[(i+x) % A.length], where % is the modulo operation.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
    }
  }

  if (nums[nums.length - 1] > nums[0]) {
    count++;
  }

  return count < 2 ? true : false;
};
