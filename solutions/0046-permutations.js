/**
 * 46. Permutations
 * https://leetcode.com/problems/permutations/
 * Difficulty: Medium
 *
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  backtrack(result, nums);
  return result;
};

function backtrack(result, nums, order = []) {
  if (!nums.length) {
    result.push(order);
  } else {
    for (let i = 0; i < nums.length; i++) {
      backtrack(
        result,
        [...nums.slice(0, i), ...nums.slice(i + 1)],
        [...order, nums[i]]
      );
    }
  }
}
