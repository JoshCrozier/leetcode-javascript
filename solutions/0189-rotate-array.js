/**
 * 189. Rotate Array
 * https://leetcode.com/problems/rotate-array/
 * Difficulty: Medium
 *
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  nums.unshift(...nums.splice((k % nums.length) * -1));
};
