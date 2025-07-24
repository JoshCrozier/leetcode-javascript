/**
 * 3431. Minimum Unlocked Indices to Sort Nums
 * https://leetcode.com/problems/minimum-unlocked-indices-to-sort-nums/
 * Difficulty: Medium
 *
 * You are given an array nums consisting of integers between 1 and 3, and a binary array
 * locked of the same size.
 *
 * We consider nums sortable if it can be sorted using adjacent swaps, where a swap between
 * two indices i and i + 1 is allowed if nums[i] - nums[i + 1] == 1 and locked[i] == 0.
 *
 * In one operation, you can unlock any index i by setting locked[i] to 0.
 *
 * Return the minimum number of operations needed to make nums sortable. If it is not possible
 * to make nums sortable, return -1.
 */

/**
 * @param {number[]} nums
 * @param {number[]} locked
 * @return {number}
 */
var minUnlockedIndices = function(nums, locked) {
  let currentMax = 1;
  let locks = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currentMax < nums[i]) {
      currentMax = nums[i];
      locks = 0;
    }
    if (nums[i] < currentMax) {
      if (nums[i] + 1 < currentMax) {
        return -1;
      }
      result += locks;
      locks = 0;
    }
    locks += locked[i];
  }

  return result;
};
