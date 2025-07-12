/**
 * 2436. Minimum Split Into Subarrays With GCD Greater Than One
 * https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/
 * Difficulty: Medium
 *
 * You are given an array nums consisting of positive integers.
 *
 * Split the array into one or more disjoint subarrays such that:
 * - Each element of the array belongs to exactly one subarray, and
 * - The GCD of the elements of each subarray is strictly greater than 1.
 *
 * Return the minimum number of subarrays that can be obtained after the split.
 *
 * Note that:
 * - The GCD of a subarray is the largest positive integer that evenly divides all the elements
 *   of the subarray.
 * - A subarray is a contiguous part of the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSplits = function(nums) {
  const n = nums.length;
  let result = 1;
  let currentGcd = nums[0];

  for (let i = 1; i < n; i++) {
    const newGcd = gcd(currentGcd, nums[i]);
    if (newGcd === 1) {
      result++;
      currentGcd = nums[i];
    } else {
      currentGcd = newGcd;
    }
  }

  return result;

  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
};
