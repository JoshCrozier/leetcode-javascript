/**
 * 2815. Max Pair Sum in an Array
 * https://leetcode.com/problems/max-pair-sum-in-an-array/
 * Difficulty: Easy
 *
 * You are given an integer array nums. You have to find the maximum sum of a pair of numbers from
 * nums such that the largest digit in both numbers is equal.
 *
 * For example, 2373 is made up of three distinct digits: 2, 3, and 7, where 7 is the largest among
 * them.
 *
 * Return the maximum sum or -1 if no such pair exists.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
  let result = -1;
  const map = new Map();

  for (const num of nums) {
    const maxDigit = getMaxDigit(num);
    if (!map.has(maxDigit)) {
      map.set(maxDigit, []);
    }
    map.get(maxDigit).push(num);
  }

  for (const numbers of map.values()) {
    if (numbers.length >= 2) {
      numbers.sort((a, b) => b - a);
      result = Math.max(result, numbers[0] + numbers[1]);
    }
  }

  return result;

  function getMaxDigit(num) {
    let max = 0;
    while (num > 0) {
      max = Math.max(max, num % 10);
      num = Math.floor(num / 10);
    }
    return max;
  }
};
