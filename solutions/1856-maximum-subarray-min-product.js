/**
 * 1856. Maximum Subarray Min-Product
 * https://leetcode.com/problems/maximum-subarray-min-product/
 * Difficulty: Medium
 *
 * The min-product of an array is equal to the minimum value in the array multiplied by
 * the array's sum.
 * - For example, the array [3,2,5] (minimum value is 2) has a min-product of
 *   2 * (3+2+5) = 2 * 10 = 20.
 *
 * Given an array of integers nums, return the maximum min-product of any non-empty
 * subarray of nums. Since the answer may be large, return it modulo 109 + 7.
 *
 * Note that the min-product should be maximized before performing the modulo operation.
 * Testcases are generated such that the maximum min-product without modulo will fit in
 * a 64-bit signed integer.
 *
 * A subarray is a contiguous part of an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function(nums) {
  const modulo = 1000000007n;
  const stack = [];
  const prefixSums = [0n];
  let maxMinProduct = 0n;

  for (let i = 0; i < nums.length; i++) {
    prefixSums.push(prefixSums[i] + BigInt(nums[i]));
  }

  for (let right = 0; right <= nums.length; right++) {
    const current = right < nums.length ? BigInt(nums[right]) : 0n;
    while (stack.length && stack[stack.length - 1].value > current) {
      const { index, value } = stack.pop();
      const left = stack.length ? stack[stack.length - 1].index + 1 : 0;
      const subarraySum = prefixSums[right] - prefixSums[left];
      maxMinProduct = maxMinProduct > value * subarraySum ? maxMinProduct : value * subarraySum;
    }
    stack.push({ index: right, value: current });
  }

  return Number(maxMinProduct % modulo);
};
