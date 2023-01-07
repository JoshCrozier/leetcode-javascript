/**
 * 137. Single Number II
 * https://leetcode.com/problems/single-number-ii/
 * Difficulty: Medium
 *
 * Given an integer array nums where every element appears three times except for one, which appears
 * exactly once. Find the single element and return it.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let a = 0, b = 0;

  nums.forEach(c => {
    const offset = (~a & b & c) | (a & ~b & ~c);
    b = (~a & ~b & c) | (~a & b & ~c);
    a = offset;
  });

  return a | b;
};
