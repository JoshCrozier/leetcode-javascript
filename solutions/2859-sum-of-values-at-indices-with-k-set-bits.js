/**
 * 2859. Sum of Values at Indices With K Set Bits
 * https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums and an integer k.
 *
 * Return an integer that denotes the sum of elements in nums whose corresponding indices have
 * exactly k set bits in their binary representation.
 *
 * The set bits in an integer are the 1's present when it is written in binary.
 *
 * For example, the binary representation of 21 is 10101, which has 3 set bits.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i.toString(2).split('1').length - 1 === k) {
      result += nums[i];
    }
  }

  return result;
};
