/**
 * 491. Non-decreasing Subsequences
 * https://leetcode.com/problems/non-decreasing-subsequences/
 * Difficulty: Medium
 *
 * Given an integer array nums, return all the different possible non-decreasing
 * subsequences of the given array with at least two elements. You may return
 * the answer in any order.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const result = new Set();
  backtrack(result, nums, 0, []);
  return Array.from(result).map(s => s.split(','));
};

function backtrack(result, nums, offset, order) {
  if (order.length > 1) {
    result.add(order.join());
  }
  for (let index = offset; index < nums.length; index++) {
    if (!(order[order.length - 1] > nums[index])) {
      backtrack(result, nums, index + 1, [...order, nums[index]]);
    }
  }
}
