/**
 * 90. Subsets II
 * https://leetcode.com/problems/subsets-ii/
 * Difficulty: Medium
 *
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const seen = new Set();
  const result = [];
  dfs([], 0);

  function dfs(subset, start) {
    const key = subset.sort((a, b) => a - b).join('');
    if (!seen.has(key)) {
      result.push(subset);
      seen.add(key);
    }
    for (let index = start; index < nums.length; index++) {
      dfs([...subset, nums[index]], index + 1);
    }
  }

  return result;
};
