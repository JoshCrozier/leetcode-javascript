/**
 * 45. Jump Game II
 * https://leetcode.com/problems/jump-game-ii/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array of integers nums of length n.
 * You are initially positioned at nums[0].
 *
 * Each element nums[i] represents the maximum length of a forward
 * jump from index i. In other words, if you are at nums[i], you
 * can jump to any nums[i + j] where:
 * - 0 <= j <= nums[i] and
 * - i + j < n
 *
 * Return the minimum number of jumps to reach nums[n - 1].
 * The test cases are generated such that you can reach nums[n - 1].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let result = 0;
  let max = 0;
  let previous = 0;

  for (let index = 0; index < nums.length - 1; index++) {
    max = Math.max(max, index + nums[index]);
    if (index === previous) {
      result++;
      previous = max;
    }
  }

  return result;
};
