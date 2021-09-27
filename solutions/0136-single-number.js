/**
 * 136. Single Number
 * https://leetcode.com/problems/single-number/
 * Difficulty: Easy
 *
 * Given a non-empty array of integers nums, every element appears twice
 * except for one. Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and
 * use only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((result, num) => result ^= num, 0);
};
