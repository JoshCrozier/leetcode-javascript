/**
 * 1150. Check If a Number Is Majority Element in a Sorted Array
 * https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/
 * Difficulty: Easy
 *
 * Given an integer array nums sorted in non-decreasing order and an integer target, return true
 * if target is a majority element, or false otherwise.
 *
 * A majority element in an array nums is an element that appears more than nums.length / 2 times
 * in the array.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function(nums, target) {
  const firstIndex = findFirstIndex(target);
  if (firstIndex >= nums.length || nums[firstIndex] !== target) {
    return false;
  }

  const lastIndex = findLastIndex(target);
  const frequency = lastIndex - firstIndex + 1;

  return frequency > nums.length / 2;

  function findFirstIndex(target) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  function findLastIndex(target) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left - 1;
  }
};
