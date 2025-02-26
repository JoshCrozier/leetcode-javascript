/**
 * 410. Split Array Largest Sum
 * https://leetcode.com/problems/split-array-largest-sum/
 * Difficulty: Hard
 *
 * Given an integer array nums and an integer k, split nums into k non-empty subarrays
 * such that the largest sum of any subarray is minimized.
 *
 * Return the minimized largest sum of the split.
 *
 * A subarray is a contiguous part of the array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
  let left = Math.max(...nums);
  let right = nums.reduce((a, b) => a + b);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let count = 1;
    let sum = 0;

    for (const num of nums) {
      if (sum + num <= mid) {
        sum += num;
      } else {
        count++;
        sum = num;
      }
    }

    if (count > k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
