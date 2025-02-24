/**
 * 396. Rotate Function
 * https://leetcode.com/problems/rotate-function/
 * Difficulty: Medium
 *
 * You are given an integer array nums of length n.
 *
 * Assume arrk to be an array obtained by rotating nums by k positions clock-wise.
 * We define the rotation function F on nums as follow:
 * - F(k) = 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1].
 *
 * Return the maximum value of F(0), F(1), ..., F(n-1).
 *
 * The test cases are generated so that the answer fits in a 32-bit integer.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  let current = nums.reduce((total, n, i) => total + i * n, 0);
  let result = current;

  for (let i = 1; i < nums.length; i++) {
    current = current + sum - nums.length * nums[nums.length - i];
    result = Math.max(result, current);
  }

  return result;
};
