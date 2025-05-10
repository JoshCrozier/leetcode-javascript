/**
 * 2918. Minimum Equal Sum of Two Arrays After Replacing Zeros
 * https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/
 * Difficulty: Medium
 *
 * You are given two arrays nums1 and nums2 consisting of positive integers.
 *
 * You have to replace all the 0's in both arrays with strictly positive integers such that the
 * sum of elements of both arrays becomes equal.
 *
 * Return the minimum equal sum you can obtain, or -1 if it is impossible.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
  let sum1 = 0;
  let zeros1 = 0;
  for (const num of nums1) {
    sum1 += num;
    if (num === 0) zeros1++;
  }

  let sum2 = 0;
  let zeros2 = 0;
  for (const num of nums2) {
    sum2 += num;
    if (num === 0) zeros2++;
  }

  const minSum1 = sum1 + zeros1;
  const minSum2 = sum2 + zeros2;

  if (minSum1 > sum2 && zeros2 === 0 || minSum2 > sum1 && zeros1 === 0) return -1;

  return Math.max(minSum1, minSum2);
};
