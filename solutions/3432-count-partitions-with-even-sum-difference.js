/**
 * 3432. Count Partitions with Even Sum Difference
 * https://leetcode.com/problems/count-partitions-with-even-sum-difference/
 * Difficulty: Easy
 *
 * You are given an integer array nums of length n.
 *
 * A partition is defined as an index i where 0 <= i < n - 1, splitting the array into two
 * non-empty subarrays such that:
 * - Left subarray contains indices [0, i].
 * - Right subarray contains indices [i + 1, n - 1].
 *
 * Return the number of partitions where the difference between the sum of the left and right
 * subarrays is even.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
  const total = nums.reduce((sum, n) => sum + n, 0);
  let result = 0;

  for (let i = 0, left = 0; i < nums.length - 1; i++) {
    left += nums[i];
    result += (left - total - left) % 2 === 0 ? 1 : 0;
  }

  return result;
};
