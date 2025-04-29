/**
 * 1770. Maximum Score from Performing Multiplication Operations
 * https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/
 * Difficulty: Hard
 *
 * You are given two 0-indexed integer arrays nums and multipliers of size n and m respectively,
 * where n >= m.
 *
 * You begin with a score of 0. You want to perform exactly m operations. On the ith operation
 * (0-indexed) you will:
 * - Choose one integer x from either the start or the end of the array nums.
 * - Add multipliers[i] * x to your score.
 *   - Note that multipliers[0] corresponds to the first operation, multipliers[1] to the second
 *     operation, and so on.
 * - Remove x from nums.
 *
 * Return the maximum score after performing m operations.
 */

/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
  const m = multipliers.length;
  const dp = Array.from({ length: m + 1 }, () => Array(m + 1).fill(0));

  for (let op = m - 1; op >= 0; op--) {
    for (let left = op; left >= 0; left--) {
      const right = nums.length - 1 - (op - left);
      const takeLeft = multipliers[op] * nums[left] + dp[op + 1][left + 1];
      const takeRight = multipliers[op] * nums[right] + dp[op + 1][left];
      dp[op][left] = Math.max(takeLeft, takeRight);
    }
  }

  return dp[0][0];
};
