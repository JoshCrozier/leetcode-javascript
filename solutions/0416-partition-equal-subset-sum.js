/**
 * 416. Partition Equal Subset Sum
 * https://leetcode.com/problems/partition-equal-subset-sum/
 * Difficulty: Medium
 *
 * Given an integer array nums, return true if you can partition the array into two subsets
 * such that the sum of the elements in both subsets is equal or false otherwise.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2) {
    return false;
  }

  const target = sum / 2;
  let set = new Set([0]);
  for (const n of nums) {
    const next = new Set(set);
    for (const value of set) {
      if (value + n === target) {
        return true;
      }
      next.add(value + n);
    }
    set = next;
  }

  return false;
};
