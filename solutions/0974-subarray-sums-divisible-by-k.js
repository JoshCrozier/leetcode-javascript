/**
 * 974. Subarray Sums Divisible by K
 * https://leetcode.com/problems/subarray-sums-divisible-by-k/
 * Difficulty: Medium
 *
 * Given an integer array nums and an integer k, return the number of non-empty subarrays
 * that have a sum divisible by k.
 *
 * A subarray is a contiguous part of an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
  const remainderCount = new Map([[0, 1]]);
  let sum = 0;
  let result = 0;

  for (const num of nums) {
    sum += num;
    const remainder = ((sum % k) + k) % k;
    result += remainderCount.get(remainder) || 0;
    remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
  }

  return result;
};
