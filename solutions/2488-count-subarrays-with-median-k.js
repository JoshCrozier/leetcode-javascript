/**
 * 2488. Count Subarrays With Median K
 * https://leetcode.com/problems/count-subarrays-with-median-k/
 * Difficulty: Hard
 *
 * You are given an array nums of size n consisting of distinct integers from 1 to n and
 * a positive integer k.
 *
 * Return the number of non-empty subarrays in nums that have a median equal to k.
 *
 * Note:
 * - The median of an array is the middle element after sorting the array in ascending order.
 *   If the array is of even length, the median is the left middle element.
 *   - For example, the median of [2,3,1,4] is 2, and the median of [8,4,3,5,1] is 4.
 * - A subarray is a contiguous part of an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  const n = nums.length;
  const kIndex = nums.indexOf(k);
  const balanceMap = new Map([[0, 1]]);
  let balance = 0;
  let result = 0;

  for (let i = kIndex + 1; i < n; i++) {
    balance += nums[i] > k ? 1 : -1;
    balanceMap.set(balance, (balanceMap.get(balance) || 0) + 1);
  }

  balance = 0;
  for (let i = kIndex; i >= 0; i--) {
    balance += nums[i] > k ? -1 : nums[i] < k ? 1 : 0;
    result += balanceMap.get(balance) || 0;
    result += balanceMap.get(balance + 1) || 0;
  }

  return result;
};
