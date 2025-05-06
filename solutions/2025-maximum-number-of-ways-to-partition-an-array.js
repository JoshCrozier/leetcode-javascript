/**
 * 2025. Maximum Number of Ways to Partition an Array
 * https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/
 * Difficulty: Hard
 *
 * You are given a 0-indexed integer array nums of length n. The number of ways to partition
 * nums is the number of pivot indices that satisfy both conditions:
 * - 1 <= pivot < n
 * - nums[0] + nums[1] + ... + nums[pivot - 1] == nums[pivot] + nums[pivot + 1] + ... + nums[n - 1]
 *
 * You are also given an integer k. You can choose to change the value of one element of nums to
 * k, or to leave the array unchanged.
 *
 * Return the maximum possible number of ways to partition nums to satisfy both conditions after
 * changing at most one element.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var waysToPartition = function(nums, k) {
  const n = nums.length;
  const prefixSums = [nums[0]];
  const leftDiffs = new Map();
  const rightDiffs = new Map();

  for (let i = 1; i < n; i++) {
    prefixSums[i] = prefixSums[i - 1] + nums[i];
    const diff = prefixSums[i - 1];
    rightDiffs.set(diff, (rightDiffs.get(diff) || 0) + 1);
  }

  const totalSum = prefixSums[n - 1];
  let result = totalSum % 2 === 0 ? (rightDiffs.get(totalSum / 2) || 0) : 0;

  for (let i = 0; i < n; i++) {
    const delta = k - nums[i];
    const newTotalSum = totalSum + delta;

    if (newTotalSum % 2 === 0) {
      const targetSum = newTotalSum / 2;
      const waysFromLeft = leftDiffs.get(targetSum) || 0;
      const waysFromRight = rightDiffs.get(targetSum - delta) || 0;
      result = Math.max(result, waysFromLeft + waysFromRight);
    }

    if (i < n - 1) {
      const currentDiff = prefixSums[i];
      leftDiffs.set(currentDiff, (leftDiffs.get(currentDiff) || 0) + 1);
      rightDiffs.set(currentDiff, rightDiffs.get(currentDiff) - 1);
    }
  }

  return result;
};
