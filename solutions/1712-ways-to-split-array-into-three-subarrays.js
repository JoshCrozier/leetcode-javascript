/**
 * 1712. Ways to Split Array Into Three Subarrays
 * https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/
 * Difficulty: Medium
 *
 * A split of an integer array is good if:
 * - The array is split into three non-empty contiguous subarrays - named left, mid, right
 *   respectively from left to right.
 * - The sum of the elements in left is less than or equal to the sum of the elements in mid,
 *   and the sum of the elements in mid is less than or equal to the sum of the elements in right.
 *
 * Given nums, an array of non-negative integers, return the number of good ways to split nums.
 * As the number may be too large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function(nums) {
  const MOD = 1e9 + 7;
  const n = nums.length;
  const prefixSum = new Array(n).fill(0);

  prefixSum[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }

  let splitCount = 0;
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 2;
    let validStart = -1;
    let validEnd = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const leftSum = prefixSum[i];
      const midSum = prefixSum[mid] - prefixSum[i];
      const rightSum = prefixSum[n - 1] - prefixSum[mid];

      if (leftSum <= midSum && midSum <= rightSum) {
        validStart = mid;
        right = mid - 1;
      } else if (leftSum > midSum) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    left = validStart === -1 ? n - 1 : validStart;
    right = n - 2;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const leftSum = prefixSum[i];
      const midSum = prefixSum[mid] - prefixSum[i];
      const rightSum = prefixSum[n - 1] - prefixSum[mid];

      if (leftSum <= midSum && midSum <= rightSum) {
        validEnd = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (validStart !== -1 && validEnd !== -1 && validStart <= validEnd) {
      splitCount = (splitCount + validEnd - validStart + 1) % MOD;
    }
  }

  return splitCount;
};
