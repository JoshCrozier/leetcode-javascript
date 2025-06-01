/**
 * 2778. Sum of Squares of Special Elements
 * https://leetcode.com/problems/sum-of-squares-of-special-elements/
 * Difficulty: Easy
 *
 * You are given a 1-indexed integer array nums of length n.
 *
 * An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.
 *
 * Return the sum of the squares of all special elements of nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
  const n = nums.length;
  let total = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      total += nums[i - 1] * nums[i - 1];
    }
  }

  return total;
};
