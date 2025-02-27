/**
 * 446. Arithmetic Slices II - Subsequence
 * https://leetcode.com/problems/arithmetic-slices-ii-subsequence/
 * Difficulty: Hard
 *
 * Given an integer array nums, return the number of all the arithmetic subsequences of nums.
 *
 * A sequence of numbers is called arithmetic if it consists of at least three elements and if
 * the difference between any two consecutive elements is the same.
 *
 * - For example, [1, 3, 5, 7, 9], [7, 7, 7, 7], and [3, -1, -5, -9] are arithmetic sequences.
 * - For example, [1, 1, 2, 5, 7] is not an arithmetic sequence.
 *
 * A subsequence of an array is a sequence that can be formed by removing some elements (possibly
 * none) of the array.
 *
 * - For example, [2,5,10] is a subsequence of [1,2,1,2,4,1,5,10].
 *
 * The test cases are generated so that the answer fits in 32-bit integer.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  const dp = new Array(nums.length).fill().map(() => new Map());
  let result = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const prev = dp[j].get(diff) || 0;
      const current = (dp[i].get(diff) || 0) + prev + 1;
      dp[i].set(diff, current);
      result += prev;
    }
  }

  return result;
};
