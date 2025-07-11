/**
 * 2340. Minimum Adjacent Swaps to Make a Valid Array
 * https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums.
 *
 * Swaps of adjacent elements are able to be performed on nums.
 *
 * A valid array meets the following conditions:
 * - The largest element (any of the largest elements if there are multiple) is at the rightmost
 *   position in the array.
 * - The smallest element (any of the smallest elements if there are multiple) is at the leftmost
 *   position in the array.
 *
 * Return the minimum swaps required to make nums a valid array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function(nums) {
  const n = nums.length;
  if (n === 1) return 0;

  const minValue = Math.min(...nums);
  const maxValue = Math.max(...nums);
  const minIndex = nums.indexOf(minValue);
  const maxIndex = nums.lastIndexOf(maxValue);
  let result = minIndex + (n - 1 - maxIndex);

  if (minIndex > maxIndex) {
    result -= 1;
  }

  return result;
};
