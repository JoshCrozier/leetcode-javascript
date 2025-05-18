/**
 * 2317. Maximum XOR After Operations
 * https://leetcode.com/problems/maximum-xor-after-operations/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums. In one operation, select any non-negative
 * integer x and an index i, then update nums[i] to be equal to nums[i] AND (nums[i] XOR x).
 *
 * Note that AND is the bitwise AND operation and XOR is the bitwise XOR operation.
 *
 * Return the maximum possible bitwise XOR of all elements of nums after applying the operation
 * any number of times.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumXOR = function(nums) {
  let maxXor = 0;

  for (const num of nums) {
    maxXor |= num;
  }

  return maxXor;
};
