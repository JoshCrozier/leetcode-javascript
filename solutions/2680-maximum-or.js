/**
 * 2680. Maximum OR
 * https://leetcode.com/problems/maximum-or/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums of length n and an integer k. In an operation,
 * you can choose an element and multiply it by 2.
 *
 * Return the maximum possible value of nums[0] | nums[1] | ... | nums[n - 1] that can be obtained
 * after applying the operation on nums at most k times.
 *
 * Note that a | b denotes the bitwise or between two integers a and b.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumOr = function(nums, k) {
  const n = nums.length;
  const prefixOr = new Array(n + 1).fill(0n);
  const suffixOr = new Array(n + 1).fill(0n);

  for (let i = 0; i < n; i++) {
    prefixOr[i + 1] = prefixOr[i] | BigInt(nums[i]);
  }

  for (let i = n - 1; i >= 0; i--) {
    suffixOr[i] = suffixOr[i + 1] | BigInt(nums[i]);
  }

  let maxOr = 0n;
  for (let i = 0; i < n; i++) {
    maxOr = maxOr > (prefixOr[i] | (BigInt(nums[i]) << BigInt(k)) | suffixOr[i + 1])
      ? maxOr
      : (prefixOr[i] | (BigInt(nums[i]) << BigInt(k)) | suffixOr[i + 1]);
  }

  return Number(maxOr);
};
