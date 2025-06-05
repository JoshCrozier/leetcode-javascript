/**
 * 2932. Maximum Strong Pair XOR I
 * https://leetcode.com/problems/maximum-strong-pair-xor-i/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums. A pair of integers x and y is called a strong pair
 * if it satisfies the condition:
 * - |x - y| <= min(x, y)
 *
 * You need to select two integers from nums such that they form a strong pair and their bitwise
 * XOR is the maximum among all strong pairs in the array.
 *
 * Return the maximum XOR value out of all possible strong pairs in the array nums.
 *
 * Note that you can pick the same integer twice to form a pair.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
  let result = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] - nums[i] <= Math.min(nums[i], nums[j])) {
        result = Math.max(result, nums[i] ^ nums[j]);
      } else {
        break;
      }
    }
  }

  return result;
};
