/**
 * 1755. Closest Subsequence Sum
 * https://leetcode.com/problems/closest-subsequence-sum/
 * Difficulty: Hard
 *
 * You are given an integer array nums and an integer goal.
 *
 * You want to choose a subsequence of nums such that the sum of its elements is the closest
 * possible to goal. That is, if the sum of the subsequence's elements is sum, then you want
 * to minimize the absolute difference abs(sum - goal).
 *
 * Return the minimum possible value of abs(sum - goal).
 *
 * Note that a subsequence of an array is an array formed by removing some elements (possibly
 * all or none) of the original array.
 */

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var minAbsDifference = function(nums, goal) {
  const n = nums.length;
  const half = Math.floor(n / 2);
  const leftSums = new Set();
  const rightSums = new Set();

  generateSums(0, half, leftSums);
  generateSums(half, n, rightSums);

  const rightArray = [...rightSums].sort((a, b) => a - b);
  let minDiff = Infinity;

  for (const leftSum of leftSums) {
    const target = goal - leftSum;
    let left = 0;
    let right = rightArray.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const sum = leftSum + rightArray[mid];
      minDiff = Math.min(minDiff, Math.abs(sum - goal));

      if (sum < goal) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return minDiff;

  function generateSums(start, end, sums, current = 0) {
    if (start === end) {
      sums.add(current);
      return;
    }
    generateSums(start + 1, end, sums, current);
    generateSums(start + 1, end, sums, current + nums[start]);
  }
};
