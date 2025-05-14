/**
 * 2148. Count Elements With Strictly Smaller and Greater Elements
 * https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/
 * Difficulty: Easy
 *
 * Given an integer array nums, return the number of elements that have both a strictly
 * smaller and a strictly greater element appear in nums.
 */

/**
* @param {number[]} nums
* @return {number}
*/
var countElements = function(nums) {
  let result = 0;

  if (nums.length <= 2) return 0;
  for (const num of nums) {
    if (num > Math.min(...nums) && num < Math.max(...nums)) {
      result++;
    }
  }

  return result;
};
