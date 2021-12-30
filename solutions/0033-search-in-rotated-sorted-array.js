/**
 * 33. Search in Rotated Sorted Array
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * Difficulty: Medium
 *
 * There is an integer array nums sorted in ascending order (with distinct values).
 *
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot
 * index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1],
 * ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7]
 * might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 *
 * Given the array nums after the possible rotation and an integer target, return the index
 * of target if it is in nums, or -1 if it is not in nums.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0;
  let end = nums.length;

  while (start < end) {
    const i = Math.floor((start + end) / 2);
    const middle = nums[i] < nums[0] === target < nums[0]
      ? nums[i]
      : target < nums[0] ? -Infinity : Infinity;

    if (middle < target) {
      start = i + 1;
    } else if (middle > target) {
      end = i;
    } else {
      return i;
    }
  }

  return -1;
};
