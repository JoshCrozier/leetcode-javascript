/**
 * 3356. Zero Array Transformation II
 * https://leetcode.com/problems/zero-array-transformation-ii/
 * Difficulty: Medium
 *
 * You are given an integer array nums of length n and a 2D array queries where
 * queries[i] = [li, ri, vali].
 *
 * Each queries[i] represents the following action on nums:
 * - Decrement the value at each index in the range [li, ri] in nums by at most vali.
 * - The amount by which each value is decremented can be chosen independently for each index.
 *
 * A Zero Array is an array with all its elements equal to 0.
 *
 * Return the minimum possible non-negative value of k, such that after processing the first
 * k queries in sequence, nums becomes a Zero Array. If no such k exists, return -1.
 */

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
  const diff = new Array(nums.length + 1).fill(0);
  const total = nums.reduce((sum, num) => sum + num, 0);
  let left = 0;
  let right = queries.length - 1;
  let result = -1;

  if (total === 0) {
    return 0;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canZeroOut(mid)) {
      result = mid + 1;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;

  function canZeroOut(k) {
    const tempDiff = new Array(nums.length + 1).fill(0);
    for (let i = 0; i <= k; i++) {
      const [left, right, val] = queries[i];
      tempDiff[left] += val;
      if (right + 1 < nums.length) tempDiff[right + 1] -= val;
    }

    let current = 0;
    let reduction = 0;
    for (let i = 0; i < nums.length; i++) {
      current = Math.max(0, current + tempDiff[i]);
      reduction += Math.min(nums[i], current);
      if (reduction >= total) return true;
    }
    return reduction >= total;
  }
};
