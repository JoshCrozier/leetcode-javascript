/**
 * 523. Continuous Subarray Sum
 * https://leetcode.com/problems/continuous-subarray-sum/
 * Difficulty: Medium
 *
 * Given an integer array nums and an integer k, return true if nums has a good subarray
 * or false otherwise.
 *
 * A good subarray is a subarray where:
 * - its length is at least two, and
 * - the sum of the elements of the subarray is a multiple of k.
 *
 * Note that:
 * - A subarray is a contiguous part of the array.
 * - An integer x is a multiple of k if there exists an integer n such that x = n * k.
 *   0 is always a multiple of k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  const map = new Map([[0, -1]]);

  for (let i = 0, sum = 0; i < nums.length; i++) {
    sum += nums[i];
    if (k !== 0) {
      sum = sum % k;
    }

    if (map.has(sum)) {
      if (i - map.get(sum) >= 2) {
        return true;
      }
    } else {
      map.set(sum, i);
    }
  }

  return false;
};
