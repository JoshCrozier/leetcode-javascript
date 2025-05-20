/**
 * 3355. Zero Array Transformation I
 * https://leetcode.com/problems/zero-array-transformation-i/
 * Difficulty: Medium
 *
 * You are given an integer array nums of length n and a 2D array queries, where
 * queries[i] = [li, ri].
 *
 * For each queries[i]:
 * - Select a subset of indices within the range [li, ri] in nums.
 * - Decrement the values at the selected indices by 1.
 *
 * A Zero Array is an array where all elements are equal to 0.
 *
 * Return true if it is possible to transform nums into a Zero Array after processing all the
 * queries sequentially, otherwise return false.
 */

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
  const maxDecrements = new Array(nums.length).fill(0);

  for (const [left, right] of queries) {
    maxDecrements[left]++;
    if (right + 1 < nums.length) {
      maxDecrements[right + 1]--;
    }
  }

  let currentDecrements = 0;
  for (let i = 0; i < nums.length; i++) {
    currentDecrements += maxDecrements[i];
    if (nums[i] > currentDecrements) {
      return false;
    }
  }

  return true;
};
