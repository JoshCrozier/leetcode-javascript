/**
 * 2177. Find Three Consecutive Integers That Sum to a Given Number
 * https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/
 * Difficulty: Medium
 *
 * Given an integer num, return three consecutive integers (as a sorted array) that sum to num.
 * If num cannot be expressed as the sum of three consecutive integers, return an empty array.
 */

/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
  if (num % 3 !== 0) return [];

  const middle = num / 3;
  return [middle - 1, middle, middle + 1];
};
