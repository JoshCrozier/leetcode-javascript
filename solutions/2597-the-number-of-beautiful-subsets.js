/**
 * 2597. The Number of Beautiful Subsets
 * https://leetcode.com/problems/the-number-of-beautiful-subsets/
 * Difficulty: Medium
 *
 * You are given an array nums of positive integers and a positive integer k.
 *
 * A subset of nums is beautiful if it does not contain two integers with an absolute difference
 * equal to k.
 *
 * Return the number of non-empty beautiful subsets of the array nums.
 *
 * A subset of nums is an array that can be obtained by deleting some (possibly none) elements
 * from nums. Two subsets are different if and only if the chosen indices to delete are different.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
  const n = nums.length;
  let count = 0;
  backtrack(0, []);
  return count;

  function backtrack(index, selected) {
    if (index === n) {
      if (selected.length > 0) count++;
      return;
    }

    const isValid = selected.every(num => Math.abs(num - nums[index]) !== k);

    backtrack(index + 1, selected);

    if (isValid) {
      backtrack(index + 1, [...selected, nums[index]]);
    }
  }
};
