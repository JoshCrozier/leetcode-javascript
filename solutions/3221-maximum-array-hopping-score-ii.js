/**
 * 3221. Maximum Array Hopping Score II
 * https://leetcode.com/problems/maximum-array-hopping-score-ii/
 * Difficulty: Medium
 *
 * Given an array nums, you have to get the maximum score starting from index 0 and
 * hopping until you reach the last element of the array.
 *
 * In each hop, you can jump from index i to an index j > i, and you get a score of
 * (j - i) * nums[j].
 *
 * Return the maximum score you can get.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  let result = 0;
  let max = 0;

  for (let i = nums.length - 1; i >= 1; i--) {
    max = Math.max(max, nums[i]);
    result += max;
  }

  return result;
};
