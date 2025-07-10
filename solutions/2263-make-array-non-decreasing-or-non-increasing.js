/**
 * 2263. Make Array Non-decreasing or Non-increasing
 * https://leetcode.com/problems/make-array-non-decreasing-or-non-increasing/
 * Difficulty: Hard
 *
 * You are given a 0-indexed integer array nums. In one operation, you can:
 * - Choose an index i in the range 0 <= i < nums.length
 * - Set nums[i] to nums[i] + 1 or nums[i] - 1
 *
 * Return the minimum number of operations to make nums non-decreasing or non-increasing.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var convertArray = function(nums) {
  const levels = [...new Set(nums)].sort((a, b) => a - b);
  const reversedNums = [...nums].reverse();

  return Math.min(helper(nums, levels), helper(reversedNums, levels));

  function helper(arr, levels) {
    const dp = new Map();
    for (const level of levels) {
      dp.set(level, 0);
    }

    for (const num of arr) {
      let currentResult = Infinity;
      const newDp = new Map();

      for (const level of levels) {
        currentResult = Math.min(currentResult, dp.get(level) + Math.abs(num - level));
        newDp.set(level, currentResult);
      }

      for (const [level, value] of newDp) {
        dp.set(level, value);
      }
    }

    return dp.get(Math.max(...levels));
  }
};
