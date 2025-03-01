/**
 * 462. Minimum Moves to Equal Array Elements II
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
 * Difficulty: Medium
 *
 * Given an integer array nums of size n, return the minimum number of moves
 * required to make all array elements equal.
 *
 * In one move, you can increment or decrement an element of the array by 1.
 *
 * Test cases are designed so that the answer will fit in a 32-bit integer.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b);
  const median = nums[Math.floor(nums.length / 2)];
  return nums.reduce((sum, num) => sum + Math.abs(num - median), 0);
};
