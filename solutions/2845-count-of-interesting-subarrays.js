/**
 * 2845. Count of Interesting Subarrays
 * https://leetcode.com/problems/count-of-interesting-subarrays/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums, an integer modulo, and an integer k.
 *
 * Your task is to find the count of subarrays that are interesting.
 *
 * A subarray nums[l..r] is interesting if the following condition holds:
 * - Let cnt be the number of indices i in the range [l, r] such that nums[i] % modulo == k.
 *   Then, cnt % modulo == k.
 *
 * Return an integer denoting the count of interesting subarrays.
 *
 * Note: A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
  const prefixCounts = new Map([[0, 1]]);
  let currentSum = 0;
  let result = 0;

  for (const num of nums) {
    currentSum = (currentSum + (num % modulo === k ? 1 : 0)) % modulo;
    result += prefixCounts.get((currentSum - k + modulo) % modulo) || 0;
    prefixCounts.set(currentSum, (prefixCounts.get(currentSum) || 0) + 1);
  }

  return result;
};
