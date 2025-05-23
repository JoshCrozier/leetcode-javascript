/**
 * 2455. Average Value of Even Numbers That Are Divisible by Three
 * https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/
 * Difficulty: Easy
 *
 * Given an integer array nums of positive integers, return the average value of all even integers
 * that are divisible by 3.
 *
 * Note that the average of n elements is the sum of the n elements divided by n and rounded down
 * to the nearest integer.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
  let sum = 0;
  let count = 0;

  for (const num of nums) {
    if (num % 2 === 0 && num % 3 === 0) {
      sum += num;
      count++;
    }
  }

  return count > 0 ? Math.floor(sum / count) : 0;
};
