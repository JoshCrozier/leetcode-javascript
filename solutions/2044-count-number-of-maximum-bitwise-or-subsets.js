/**
 * 2044. Count Number of Maximum Bitwise-OR Subsets
 * https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/
 * Difficulty: Medium
 *
 * Given an integer array nums, find the maximum possible bitwise OR of a subset of nums and return
 * the number of different non-empty subsets with the maximum bitwise OR.
 *
 * An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero)
 * elements of b. Two subsets are considered different if the indices of the elements chosen are
 * different.
 *
 * The bitwise OR of an array a is equal to a[0] OR a[1] OR ... OR a[a.length - 1] (0-indexed).
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
  const maxOr = nums.reduce((or, num) => or | num, 0);
  let count = 0;

  backtrack(0, 0);

  return count;

  function backtrack(index, currentOr) {
    if (currentOr === maxOr) count++;
    for (let i = index; i < nums.length; i++) {
      backtrack(i + 1, currentOr | nums[i]);
    }
  }
};
