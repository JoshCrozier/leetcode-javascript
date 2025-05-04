/**
 * 1979. Find Greatest Common Divisor of Array
 * https://leetcode.com/problems/find-greatest-common-divisor-of-array/
 * Difficulty: Easy
 *
 * Given an integer array nums, return the greatest common divisor of the smallest number and
 * largest number in nums.
 *
 * The greatest common divisor of two numbers is the largest positive integer that evenly
 * divides both numbers.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
  return gcd(Math.min(...nums), Math.max(...nums));

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
};
