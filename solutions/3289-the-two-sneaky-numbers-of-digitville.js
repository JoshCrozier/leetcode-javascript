/**
 * 3289. The Two Sneaky Numbers of Digitville
 * https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/
 * Difficulty: Easy
 *
 * In the town of Digitville, there was a list of numbers called nums containing integers
 * from 0 to n - 1. Each number was supposed to appear exactly once in the list, however,
 * two mischievous numbers sneaked in an additional time, making the list longer than usual.
 *
 * As the town detective, your task is to find these two sneaky numbers. Return an array of
 * size two containing the two numbers (in any order), so peace can return to Digitville.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
  const set = new Set();
  const result = [];

  for (const n of nums) {
    if (set.has(n)) {
      result.push(n);
    } else {
      set.add(n);
    }
  }

  return result;
};
