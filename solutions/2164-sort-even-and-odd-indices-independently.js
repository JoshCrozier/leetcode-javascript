/**
 * 2164. Sort Even and Odd Indices Independently
 * https://leetcode.com/problems/sort-even-and-odd-indices-independently/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums. Rearrange the values of nums according to the
 * following rules:
 * 1. Sort the values at odd indices of nums in non-increasing order.
 *    - For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values
 *      at odd indices 1 and 3 are sorted in non-increasing order.
 * 2. Sort the values at even indices of nums in non-decreasing order.
 *    - For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values
 *      at even indices 0 and 2 are sorted in non-decreasing order.
 *
 * Return the array formed after rearranging the values of nums.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
  const evens = [];
  const odds = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      evens.push(nums[i]);
    } else {
      odds.push(nums[i]);
    }
  }

  evens.sort((a, b) => a - b);
  odds.sort((a, b) => b - a);

  const result = [];
  let evenIndex = 0;
  let oddIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result.push(evens[evenIndex++]);
    } else {
      result.push(odds[oddIndex++]);
    }
  }

  return result;
};
