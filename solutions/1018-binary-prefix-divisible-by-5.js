/**
 * 1018. Binary Prefix Divisible By 5
 * https://leetcode.com/problems/binary-prefix-divisible-by-5/
 * Difficulty: Easy
 *
 * You are given a binary array nums (0-indexed).
 *
 * We define xi as the number whose binary representation is the subarray nums[0..i]
 * (from most-significant-bit to least-significant-bit).
 *
 * For example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5.
 *
 * Return an array of booleans answer where answer[i] is true if xi is divisible by 5.
 */

/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
  const result = new Array(nums.length);

  for (let i = 0, current = 0; i < nums.length; i++) {
    current = (current * 2 + nums[i]) % 5;
    result[i] = current === 0;
  }

  return result;
};
