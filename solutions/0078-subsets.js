/**
 * 78. Subsets
 * https://leetcode.com/problems/subsets/
 * Difficulty: Medium
 *
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [];
  dfs([], 0);

  function dfs(subset, start) {
    result.push(subset);
    for (let index = start; index < nums.length; index++) {
      dfs([...subset, nums[index]], index + 1);
    }
  }

  return result;
};
