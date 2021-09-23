/**
 * 268. Missing Number
 * https://leetcode.com/problems/missing-number/
 * Difficulty: Easy
 *
 * Given an array `nums` containing `n` distinct numbers in the range `[0, n]`,
 * return the only number in the range that is missing from the array.
 *
 * Follow up: Could you implement a solution using only `O(1)` extra space
 * complexity and `O(n)` runtime complexity?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result += i + 1 - nums[i];
  }

  return result;
};
