/**
 * 2499. Minimum Total Cost to Make Arrays Unequal
 * https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/
 * Difficulty: Hard
 *
 * You are given two 0-indexed integer arrays nums1 and nums2, of equal length n.
 *
 * In one operation, you can swap the values of any two indices of nums1. The cost of this
 * operation is the sum of the indices.
 *
 * Find the minimum total cost of performing the given operation any number of times such
 * that nums1[i] != nums2[i] for all 0 <= i <= n - 1 after performing all the operations.
 *
 * Return the minimum total cost such that nums1 and nums2 satisfy the above condition.
 * In case it is not possible, return -1.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumTotalCost = function(nums1, nums2) {
  const n = nums1.length;
  const conflictIndices = [];
  const valueCount = new Map();

  for (let i = 0; i < n; i++) {
    if (nums1[i] === nums2[i]) {
      conflictIndices.push(i);
      valueCount.set(nums1[i], (valueCount.get(nums1[i]) || 0) + 1);
    }
  }

  if (conflictIndices.length === 0) return 0;

  let dominantValue = -1;
  let maxCount = 0;

  for (const [value, count] of valueCount) {
    if (count > maxCount) {
      maxCount = count;
      dominantValue = value;
    }
  }

  const swapsNeeded = conflictIndices.length;
  let helpersNeeded = Math.max(0, 2 * maxCount - swapsNeeded);

  const helperIndices = [];
  for (let i = 0; i < n && helpersNeeded > 0; i++) {
    if (nums1[i] !== nums2[i] && nums1[i] !== dominantValue && nums2[i] !== dominantValue) {
      helperIndices.push(i);
      helpersNeeded--;
    }
  }

  if (helpersNeeded > 0) return -1;

  const allIndices = [...conflictIndices, ...helperIndices];
  allIndices.sort((a, b) => a - b);

  let result = 0;
  for (let i = 0; i < allIndices.length; i++) {
    result += allIndices[i];
  }

  return result;
};
