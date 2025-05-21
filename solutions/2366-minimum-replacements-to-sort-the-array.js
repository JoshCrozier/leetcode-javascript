/**
 * 2366. Minimum Replacements to Sort the Array
 * https://leetcode.com/problems/minimum-replacements-to-sort-the-array/
 * Difficulty: Hard
 *
 * You are given a 0-indexed integer array nums. In one operation you can replace any element
 * of the array with any two elements that sum to it.
 * - For example, consider nums = [5,6,7]. In one operation, we can replace nums[1] with 2 and 4
 *   and convert nums to [5,2,4,7].
 *
 * Return the minimum number of operations to make an array that is sorted in non-decreasing order.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
  let result = 0;
  let prev = nums[nums.length - 1];

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > prev) {
      const splits = Math.ceil(nums[i] / prev);
      result += splits - 1;
      prev = Math.floor(nums[i] / splits);
    } else {
      prev = nums[i];
    }
  }

  return result;
};
