/**
 * 35. Search Insert Position
 * https://leetcode.com/problems/search-insert-position/
 * Difficulty: Easy
 *
 * Given a sorted array of distinct integers and a target value, return the
 * index if the target is found. If not, return the index where it would be
 * if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
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

  return start;
};
