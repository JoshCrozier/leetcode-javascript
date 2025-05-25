/**
 * 2574. Left and Right Sum Differences
 * https://leetcode.com/problems/left-and-right-sum-differences/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums of size n.
 *
 * Define two arrays leftSum and rightSum where:
 * - leftSum[i] is the sum of elements to the left of the index i in the array nums.
 *   If there is no such element, leftSum[i] = 0.
 * - rightSum[i] is the sum of elements to the right of the index i in the array nums.
 *   If there is no such element, rightSum[i] = 0.
 *
 * Return an integer array answer of size n where answer[i] = |leftSum[i] - rightSum[i]|.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
  const n = nums.length;
  const result = new Array(n).fill(0);
  let leftSum = 0;
  let rightSum = nums.reduce((sum, num) => sum + num, 0);

  for (let i = 0; i < n; i++) {
    rightSum -= nums[i];
    result[i] = Math.abs(leftSum - rightSum);
    leftSum += nums[i];
  }

  return result;
};
