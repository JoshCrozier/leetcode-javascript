/**
 * 1508. Range Sum of Sorted Subarray Sums
 * https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/
 * Difficulty: Medium
 *
 * You are given the array nums consisting of n positive integers. You computed the sum of all
 * non-empty continuous subarrays from the array and then sorted them in non-decreasing order,
 * creating a new array of n * (n + 1) / 2 numbers.
 *
 * Return the sum of the numbers from index left to index right (indexed from 1), inclusive,
 * in the new array. Since the answer can be a huge number return it modulo 109 + 7.
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
  const MOD = 1e9 + 7;
  const sums = [];

  for (let start = 0; start < n; start++) {
    let currentSum = 0;
    for (let end = start; end < n; end++) {
      currentSum += nums[end];
      sums.push(currentSum);
    }
  }

  sums.sort((a, b) => a - b);

  let result = 0;
  for (let i = left - 1; i < right; i++) {
    result = (result + sums[i]) % MOD;
  }

  return result;
};
