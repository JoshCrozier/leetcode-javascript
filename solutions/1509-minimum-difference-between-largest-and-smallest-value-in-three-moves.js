/**
 * 1509. Minimum Difference Between Largest and Smallest Value in Three Moves
 * https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/
 * Difficulty: Medium
 *
 * You are given an integer array nums.
 *
 * In one move, you can choose one element of nums and change it to any value.
 *
 * Return the minimum difference between the largest and smallest value of nums after performing at
 * most three moves.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
  if (nums.length <= 4) return 0;

  nums.sort((a, b) => a - b);

  const n = nums.length;
  let result = Infinity;

  result = Math.min(result, nums[n - 1] - nums[3]);
  result = Math.min(result, nums[n - 2] - nums[2]);
  result = Math.min(result, nums[n - 3] - nums[1]);
  result = Math.min(result, nums[n - 4] - nums[0]);

  return result;
};
