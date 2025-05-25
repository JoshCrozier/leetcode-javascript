/**
 * 2567. Minimum Score by Changing Two Elements
 * https://leetcode.com/problems/minimum-score-by-changing-two-elements/
 * Difficulty: Medium
 *
 * You are given an integer array nums.
 * - The low score of nums is the minimum absolute difference between any two integers.
 * - The high score of nums is the maximum absolute difference between any two integers.
 * - The score of nums is the sum of the high and low scores.
 *
 * Return the minimum score after changing two elements of nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) {
  const sorted = nums.sort((a, b) => a - b);

  return Math.min(
    sorted[sorted.length - 2] - sorted[1],
    sorted[sorted.length - 1] - sorted[2],
    sorted[sorted.length - 3] - sorted[0]
  );
};
