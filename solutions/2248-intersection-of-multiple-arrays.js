/**
 * 2248. Intersection of Multiple Arrays
 * https://leetcode.com/problems/intersection-of-multiple-arrays/
 * Difficulty: Easy
 *
 * Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers,
 * return the list of integers that are present in each array of nums sorted in ascending order.
 */

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
  const count = new Map();

  for (const array of nums) {
    for (const num of array) {
      count.set(num, (count.get(num) || 0) + 1);
    }
  }

  const result = [];
  for (const [num, freq] of count) {
    if (freq === nums.length) {
      result.push(num);
    }
  }

  return result.sort((a, b) => a - b);
};
