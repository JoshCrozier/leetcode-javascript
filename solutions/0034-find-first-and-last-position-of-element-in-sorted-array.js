/**
 * 34. Find First and Last Position of Element in Sorted Array
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * Difficulty: Medium
 *
 * Given an array of integers nums sorted in non-decreasing order, find the starting and
 * ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (target > nums[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  if (nums[start] !== target) {
    return [-1, -1];
  }

  while (nums[start - 1] === target) start--;
  while (nums[end + 1] === target) end++;

  return [start, end];
};
