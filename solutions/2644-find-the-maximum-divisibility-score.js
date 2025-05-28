/**
 * 2644. Find the Maximum Divisibility Score
 * https://leetcode.com/problems/find-the-maximum-divisibility-score/
 * Difficulty: Easy
 *
 * You are given two integer arrays nums and divisors.
 *
 * The divisibility score of divisors[i] is the number of indices j such that nums[j] is
 * divisible by divisors[i].
 *
 * Return the integer divisors[i] with the maximum divisibility score. If multiple integers
 * have the maximum score, return the smallest one.
 */

/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
  let maxScore = 0;
  let result = divisors[0];

  for (const divisor of divisors) {
    let score = 0;
    for (const num of nums) {
      if (num % divisor === 0) {
        score++;
      }
    }
    if (score > maxScore || (score === maxScore && divisor < result)) {
      maxScore = score;
      result = divisor;
    }
  }

  return result;
};
