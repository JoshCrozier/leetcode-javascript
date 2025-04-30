/**
 * 1785. Minimum Elements to Add to Form a Given Sum
 * https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/
 * Difficulty: Medium
 *
 * You are given an integer array nums and two integers limit and goal. The array nums has
 * an interesting property that abs(nums[i]) <= limit.
 *
 * Return the minimum number of elements you need to add to make the sum of the array equal
 * to goal. The array must maintain its property that abs(nums[i]) <= limit.
 *
 * Note that abs(x) equals x if x >= 0, and -x otherwise.
 */

/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function(nums, limit, goal) {
  const currentSum = nums.reduce((sum, num) => sum + num, 0);
  const difference = Math.abs(goal - currentSum);
  return Math.ceil(difference / limit);
};
