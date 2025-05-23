/**
 * 2447. Number of Subarrays With GCD Equal to K
 * https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/
 * Difficulty: Medium
 *
 * Given an integer array nums and an integer k, return the number of subarrays of nums where
 * the greatest common divisor of the subarray's elements is k.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * The greatest common divisor of an array is the largest integer that evenly divides all the
 * array elements.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayGCD = function(nums, k) {
  let result = 0;
  for (let start = 0; start < nums.length; start++) {
    let currentGCD = nums[start];
    for (let end = start; end < nums.length; end++) {
      currentGCD = gcd(currentGCD, nums[end]);
      if (currentGCD === k) {
        result++;
      }
    }
  }

  return result;

  function gcd(a, b) {
    while (b) {
      a %= b;
      [a, b] = [b, a];
    }
    return a;
  }
};
