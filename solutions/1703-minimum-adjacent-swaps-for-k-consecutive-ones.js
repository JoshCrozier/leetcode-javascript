/**
 * 1703. Minimum Adjacent Swaps for K Consecutive Ones
 * https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/
 * Difficulty: Hard
 *
 * You are given an integer array, nums, and an integer k. nums comprises of only 0's and 1's. In
 * one move, you can choose two adjacent indices and swap their values.
 *
 * Return the minimum number of moves required so that nums has k consecutive 1's.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minMoves = function(nums, k) {
  const ones = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) ones.push(i);
  }

  const prefixSum = [0];
  for (let i = 0; i < ones.length; i++) {
    prefixSum.push(prefixSum[i] + ones[i]);
  }

  let minSwaps = Infinity;
  for (let i = 0; i <= ones.length - k; i++) {
    const j = i + k - 1;
    const mid = i + Math.floor(k / 2);
    const target = ones[mid];
    const leftCount = mid - i;
    const rightCount = j - mid;
    const leftSum = prefixSum[mid] - prefixSum[i];
    const rightSum = prefixSum[j + 1] - prefixSum[mid + 1];
    const swaps = (target * leftCount - leftSum) + (rightSum - target * rightCount);
    minSwaps = Math.min(minSwaps, swaps);
  }

  const medianAdjust = Math.floor(k / 2) * Math.ceil(k / 2);
  return minSwaps - medianAdjust;
};
