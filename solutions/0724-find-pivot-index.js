/**
 * 724. Find Pivot Index
 * https://leetcode.com/problems/find-pivot-index/
 * Difficulty: Easy
 *
 * Given an array of integers nums, calculate the pivot index of this array.
 *
 * The pivot index is the index where the sum of all the numbers strictly to the left
 * of the index is equal to the sum of all the numbers strictly to the index's right.
 *
 * If the index is on the left edge of the array, then the left sum is 0 because there
 * are no elements to the left. This also applies to the right edge of the array.
 *
 * Return the leftmost pivot index. If no such index exists, return -1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let left = 0;
  let right = nums.reduce((sum, n) => sum + n, 0);

  for (let i = 0; i < nums.length; i++) {
    left += nums[i];
    right -= nums[i];
    if (left - nums[i] === right) {
      return i;
    }
  }

  return -1;
};
