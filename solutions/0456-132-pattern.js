/**
 * 456. 132 Pattern
 * https://leetcode.com/problems/132-pattern/
 * Difficulty: Medium
 *
 * Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i],
 * nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].
 *
 * Return true if there is a 132 pattern in nums, otherwise, return false.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  const stack = [];

  for (let i = nums.length - 1, j = -Infinity; i >= 0; i--) {
    while (nums[i] > stack[stack.length - 1]) {
      j = stack.pop();
    }
    if (nums[i] < j) {
      return true;
    }
    stack.push(nums[i]);
  }

  return false;
};
