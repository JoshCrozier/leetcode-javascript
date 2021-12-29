/**
 * 229. Majority Element II
 * https://leetcode.com/problems/majority-element-ii/
 * Difficulty: Medium
 *
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const map = new Map();
  nums.forEach(n => map.set(n, (map.get(n) || 0) + 1));

  return [...map]
    .filter(([key, value]) => value > nums.length / 3)
    .map(([key]) => key);
};
