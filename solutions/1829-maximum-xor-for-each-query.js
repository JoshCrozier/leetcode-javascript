/**
 * 1829. Maximum XOR for Each Query
 * https://leetcode.com/problems/maximum-xor-for-each-query/
 * Difficulty: Medium
 *
 * You are given a sorted array nums of n non-negative integers and an integer maximumBit.
 * You want to perform the following query n times:
 * - Find a non-negative integer k < 2maximumBit such that nums[0] XOR nums[1] XOR ... XOR
 *   nums[nums.length-1] XOR k is maximized. k is the answer to the ith query.
 * - Remove the last element from the current array nums.
 *
 * Return an array answer, where answer[i] is the answer to the ith query.
 */

/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
  const result = [];
  let currentXor = 0;
  const maxValue = (1 << maximumBit) - 1;

  for (const num of nums) {
    currentXor ^= num;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    const optimalK = currentXor ^ maxValue;
    result.push(optimalK);
    currentXor ^= nums[i];
  }

  return result;
};
