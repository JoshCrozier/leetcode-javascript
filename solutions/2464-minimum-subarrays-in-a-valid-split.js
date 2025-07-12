/**
 * 2464. Minimum Subarrays in a Valid Split
 * https://leetcode.com/problems/minimum-subarrays-in-a-valid-split/
 * Difficulty: Medium
 *
 * You are given an integer array nums.
 *
 * Splitting of an integer array nums into subarrays is valid if:
 * - the greatest common divisor of the first and last elements of each subarray is
 *   greater than 1, and
 * - each element of nums belongs to exactly one subarray.
 *
 * Return the minimum number of subarrays in a valid subarray splitting of nums.
 * If a valid subarray splitting is not possible, return -1.
 *
 * Note that:
 * - The greatest common divisor of two numbers is the largest positive integer that
 *   evenly divides both numbers.
 * - A subarray is a contiguous non-empty part of an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarraySplit = function(nums) {
  const n = nums.length;
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    if (dp[i] === Infinity) continue;

    for (let j = i; j < n; j++) {
      if (gcd(nums[i], nums[j]) > 1) {
        dp[j + 1] = Math.min(dp[j + 1], dp[i] + 1);
      }
    }
  }

  return dp[n] === Infinity ? -1 : dp[n];

  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
};
