/**
 * 2717. Semi-Ordered Permutation
 * https://leetcode.com/problems/semi-ordered-permutation/
 * Difficulty: Easy
 *
 * You are given a 0-indexed permutation of n integers nums.
 *
 * A permutation is called semi-ordered if the first number equals 1 and the last number equals n.
 * You can perform the below operation as many times as you want until you make nums a semi-ordered
 * permutation:
 * - Pick two adjacent elements in nums, then swap them.
 *
 * Return the minimum number of operations to make nums a semi-ordered permutation.
 *
 * A permutation is a sequence of integers from 1 to n of length n containing each number exactly
 * once.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {
  let oneIndex = 0;
  let nIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) oneIndex = i;
    if (nums[i] === nums.length) nIndex = i;
  }

  return oneIndex + (nums.length - 1 - nIndex) - (oneIndex > nIndex ? 1 : 0);
};
