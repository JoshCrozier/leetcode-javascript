/**
 * 2229. Check if an Array Is Consecutive
 * https://leetcode.com/problems/check-if-an-array-is-consecutive/
 * Difficulty: Easy
 *
 * Given an integer array nums, return true if nums is consecutive, otherwise return false.
 *
 * An array is consecutive if it contains every number in the range [x, x + n - 1] (inclusive),
 * where x is the minimum number in the array and n is the length of the array.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isConsecutive = function(nums) {
  const set = new Set(nums);
  if (set.size !== nums.length) return false;

  const minNum = Math.min(...nums);
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(minNum + i)) {
      return false;
    }
  }

  return true;
};
