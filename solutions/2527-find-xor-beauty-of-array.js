/**
 * 2527. Find Xor-Beauty of Array
 * https://leetcode.com/problems/find-xor-beauty-of-array/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums.
 *
 * The effective value of three indices i, j, and k is defined as ((nums[i] | nums[j]) & nums[k]).
 *
 * The xor-beauty of the array is the XORing of the effective values of all the possible triplets
 * of indices (i, j, k) where 0 <= i, j, k < n.
 *
 * Return the xor-beauty of nums.
 *
 * Note that:
 * - val1 | val2 is bitwise OR of val1 and val2.
 * - val1 & val2 is bitwise AND of val1 and val2.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var xorBeauty = function(nums) {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
};
