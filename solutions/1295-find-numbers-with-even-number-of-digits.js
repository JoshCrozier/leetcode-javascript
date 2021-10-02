/**
 * 1295. Find Numbers with Even Number of Digits
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 * Difficulty: Easy
 *
 * Given an array nums of integers, return how many of them contain an even
 * number of digits.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  return nums.filter(num => String(num).length % 2 === 0).length;
};
