/**
 * 1031. Maximum Sum of Two Non-Overlapping Subarrays
 * https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/
 * Difficulty: Medium
 *
 * Given an integer array nums and two integers firstLen and secondLen, return the maximum sum
 * of elements in two non-overlapping subarrays with lengths firstLen and secondLen.
 *
 * The array with length firstLen could occur before or after the array with length secondLen,
 * but they have to be non-overlapping.
 *
 * A subarray is a contiguous part of an array.
 */

/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
  const prefixSums = getPrefixSums(nums);
  let maxFirst = 0;
  let maxSecond = 0;
  let result = 0;

  for (let i = firstLen; i <= nums.length - secondLen; i++) {
    maxFirst = Math.max(maxFirst, prefixSums[i] - prefixSums[i - firstLen]);
    const secondSum = prefixSums[i + secondLen] - prefixSums[i];
    result = Math.max(result, maxFirst + secondSum);
  }

  for (let i = secondLen; i <= nums.length - firstLen; i++) {
    maxSecond = Math.max(maxSecond, prefixSums[i] - prefixSums[i - secondLen]);
    const firstSum = prefixSums[i + firstLen] - prefixSums[i];
    result = Math.max(result, maxSecond + firstSum);
  }

  return result;

  function getPrefixSums(arr) {
    const sums = [0];
    for (let i = 0; i < arr.length; i++) {
      sums.push(sums[i] + arr[i]);
    }
    return sums;
  }
};
