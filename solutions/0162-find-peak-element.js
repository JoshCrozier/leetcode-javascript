/**
 * 162. Find Peak Element
 * https://leetcode.com/problems/find-peak-element/
 * Difficulty: Medium
 *
 * A peak element is an element that is strictly greater than its neighbors.
 *
 * Given a 0-indexed integer array nums, find a peak element, and return its index.
 * If the array contains multiple peaks, return the index to any of the peaks.
 *
 * You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is
 * always considered to be strictly greater than a neighbor that is outside the array.
 *
 * You must write an algorithm that runs in O(log n) time.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0;

  for (let right = nums.length - 1, middle = 0; left < right;) {
    middle = Math.floor((right + left) / 2);
    if (nums[middle] > nums[middle + 1]) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return left;
};
