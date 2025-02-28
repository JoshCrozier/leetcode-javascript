/**
 * 453. Minimum Moves to Equal Array Elements
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
 * Difficulty: Medium
 *
 * Given an integer array nums of size n, return the minimum number of moves required to
 * make all array elements equal.
 *
 * In one move, you can increment n - 1 elements of the array by 1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  const min = Math.min(...nums);
  return nums.reduce((sum, num) => sum + num - min, 0);
};
