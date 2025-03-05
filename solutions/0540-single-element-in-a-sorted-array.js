/**
 * 540. Single Element in a Sorted Array
 * https://leetcode.com/problems/single-element-in-a-sorted-array/
 * Difficulty: Medium
 *
 * You are given a sorted array consisting of only integers where every element appears
 * exactly twice, except for one element which appears exactly once.
 *
 * Return the single element that appears only once.
 *
 * Your solution must run in O(log n) time and O(1) space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);
    middle = middle - (middle % 2);
    if (nums[middle] === nums[middle + 1]) {
      left = middle + 2;
    } else {
      right = middle;
    }
  }

  return nums[left];
};
