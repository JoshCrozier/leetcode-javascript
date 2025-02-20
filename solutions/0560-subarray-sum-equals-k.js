/**
 * 560. Subarray Sum Equals K
 * https://leetcode.com/problems/subarray-sum-equals-k/
 * Difficulty: Medium
 *
 * Given an array of integers nums and an integer k, return the total number of subarrays
 * whose sum equals to k.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const map = new Map([[0, 1]]);
  let result = 0;

  for (let i = 0, count = 0; i < nums.length; i++) {
    count += nums[i];
    result += map.get(count - k) ?? 0;
    map.set(count, (map.get(count) ?? 0) + 1);
  }

  return result;
};
