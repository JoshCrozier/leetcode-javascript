/**
 * 169. Majority Element
 * https://leetcode.com/problems/majority-element/
 * Difficulty: Easy
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = new Map();
  nums.forEach(n => map.set(n, (map.get(n) || 0) + 1));

  const sorted = [...map].sort(([,a], [,b]) => b - a);
  return sorted[0][0];
};
