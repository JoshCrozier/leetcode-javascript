/**
 * 1966. Binary Searchable Numbers in an Unsorted Array
 * https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/
 * Difficulty: Medium
 *
 * Consider a function that implements an algorithm similar to Binary Search. The function has
 * two input parameters: sequence is a sequence of integers, and target is an integer value.
 * The purpose of the function is to find if the target exists in the sequence.
 *
 * The pseudocode of the function is as follows:
 *
 * func(sequence, target)
 *   while sequence is not empty
 *     randomly choose an element from sequence as the pivot
 *     if pivot = target, return true
 *     else if pivot < target, remove pivot and all elements to its left from the sequence
 *     else, remove pivot and all elements to its right from the sequence
 *   end while
 *   return false
 *
 * When the sequence is sorted, the function works correctly for all values. When the sequence
 * is not sorted, the function does not work for all values, but may still work for some values.
 *
 * Given an integer array nums, representing the sequence, that contains unique numbers and may
 * or may not be sorted, return the number of values that are guaranteed to be found using the
 * function, for every possible pivot selection.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var binarySearchableNumbers = function(nums) {
  const n = nums.length;
  const leftMax = new Array(n);
  const rightMin = new Array(n);

  leftMax[0] = nums[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], nums[i]);
  }

  rightMin[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], nums[i]);
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    const leftMaxVal = i > 0 ? leftMax[i - 1] : -Infinity;
    const rightMinVal = i < n - 1 ? rightMin[i + 1] : Infinity;

    if (leftMaxVal < nums[i] && nums[i] < rightMinVal) {
      count++;
    }
  }

  return count;
};
