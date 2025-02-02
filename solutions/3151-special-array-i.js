/**
 * 3151. Special Array I
 * https://leetcode.com/problems/special-array-i/
 * Difficulty: Easy
 *
 * An array is considered special if every pair of its adjacent elements contains
 * two numbers with different parity.
 *
 * You are given an array of integers nums. Return true if nums is a special array,
 * otherwise, return false.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if ((nums[i] + nums[i + 1]) % 2 === 0) {
      return false;
    }
  }
  return true;
};
