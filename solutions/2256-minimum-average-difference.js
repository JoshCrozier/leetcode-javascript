/**
 * 2256. Minimum Average Difference
 * https://leetcode.com/problems/minimum-average-difference/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums of length n.
 *
 * The average difference of the index i is the absolute difference between the average of the
 * first i + 1 elements of nums and the average of the last n - i - 1 elements. Both averages
 * should be rounded down to the nearest integer.
 *
 * Return the index with the minimum average difference. If there are multiple such indices,
 * return the smallest one.
 *
 * Note:
 * - The absolute difference of two numbers is the absolute value of their difference.
 * - The average of n elements is the sum of the n elements divided (integer division) by n.
 * - The average of 0 elements is considered to be 0.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
  const n = nums.length;
  let leftSum = 0;
  let rightSum = nums.reduce((sum, num) => sum + num, 0);
  let minDiff = Infinity;
  let result = 0;

  for (let i = 0; i < n; i++) {
    leftSum += nums[i];
    rightSum -= nums[i];
    const leftAvg = Math.floor(leftSum / (i + 1));
    const rightAvg = i === n - 1 ? 0 : Math.floor(rightSum / (n - i - 1));
    const diff = Math.abs(leftAvg - rightAvg);

    if (diff < minDiff) {
      minDiff = diff;
      result = i;
    }
  }

  return result;
};
