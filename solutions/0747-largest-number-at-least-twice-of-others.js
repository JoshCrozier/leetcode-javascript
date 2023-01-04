/**
 * 747. Largest Number At Least Twice of Others
 * https://leetcode.com/problems/largest-number-at-least-twice-of-others/
 * Difficulty: Easy
 *
 * You are given an integer array nums where the largest integer is unique.
 *
 * Determine whether the largest element in the array is at least twice as much
 * as every other number in the array. If it is, return the index of the largest
 * element, or return -1 otherwise.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  const max = Math.max(...nums);
  return nums.find(n => n !== max && n > max / 2) ? -1 : nums.indexOf(max);
};
