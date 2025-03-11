/**
 * 698. Partition to K Equal Sum Subsets
 * https://leetcode.com/problems/partition-to-k-equal-sum-subsets/
 * Difficulty: Medium
 *
 * Given an integer array nums and an integer k, return true if it is possible to divide this
 * array into k non-empty subsets whose sums are all equal.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  const sum = nums.reduce((a, b) => a + b);
  if (sum % k !== 0) {
    return false;
  }

  const target = sum / k;
  nums.sort((a, b) => b - a);
  if (nums[0] > target) {
    return false;
  }

  const used = new Array(nums.length).fill(false);
  return backtrack(0, 0, 0);

  function backtrack(index, count, updatedSum) {
    if (count === k) return true;
    if (updatedSum === target) return backtrack(0, count + 1, 0);
    if (updatedSum > target) return false;

    for (let i = index; i < nums.length; i++) {
      if (!used[i]) {
        used[i] = true;
        if (backtrack(i + 1, count, updatedSum + nums[i])) return true;
        used[i] = false;
        if (updatedSum === 0) break;
      }
    }
    return false;
  }
};
