/**
 * 3173. Bitwise OR of Adjacent Elements
 * https://leetcode.com/problems/bitwise-or-of-adjacent-elements/
 * Difficulty: Easy
 *
 * Given an array nums of length n, return an array answer of length n - 1 such that
 * answer[i] = nums[i] | nums[i + 1] where | is the bitwise OR operation.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var orArray = function(nums) {
  const result = [];

  for (let i = 0; i < nums.length - 1; i++) {
    result.push(nums[i] | nums[i + 1]);
  }

  return result;
};
