/**
 * 1818. Minimum Absolute Sum Difference
 * https://leetcode.com/problems/minimum-absolute-sum-difference/
 * Difficulty: Medium
 *
 * You are given two positive integer arrays nums1 and nums2, both of length n.
 *
 * The absolute sum difference of arrays nums1 and nums2 is defined as the sum of
 * |nums1[i] - nums2[i]| for each 0 <= i < n (0-indexed).
 *
 * You can replace at most one element of nums1 with any other element in nums1 to minimize
 * the absolute sum difference.
 *
 * Return the minimum absolute sum difference after replacing at most one element in the
 * array nums1. Since the answer may be large, return it modulo 109 + 7.
 *
 * |x| is defined as:
 * - x if x >= 0, or
 * - -x if x < 0.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function(nums1, nums2) {
  const MOD = 1e9 + 7;
  const sortedNums1 = [...nums1].sort((a, b) => a - b);
  let totalDiff = 0;
  let maxReduction = 0;

  for (let i = 0; i < nums1.length; i++) {
    const currentDiff = Math.abs(nums1[i] - nums2[i]);
    totalDiff = (totalDiff + currentDiff) % MOD;

    let left = 0;
    let right = nums1.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const newDiff = Math.abs(sortedNums1[mid] - nums2[i]);
      const reduction = currentDiff - newDiff;
      maxReduction = Math.max(maxReduction, reduction);

      if (sortedNums1[mid] < nums2[i]) left = mid + 1;
      else right = mid - 1;
    }
  }

  return (totalDiff - maxReduction + MOD) % MOD;
};
