/**
 * 1133. Largest Unique Number
 * https://leetcode.com/problems/largest-unique-number/
 * Difficulty: Easy
 *
 * Given an integer array nums, return the largest integer that only occurs once.
 * If no integer occurs once, return -1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let result = -1;
  for (const [num, frequency] of map) {
    if (frequency === 1) {
      result = Math.max(result, num);
    }
  }

  return result;
};
