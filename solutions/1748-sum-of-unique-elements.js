/**
 * 1748. Sum of Unique Elements
 * https://leetcode.com/problems/sum-of-unique-elements/
 * Difficulty: Easy
 *
 * You are given an integer array nums. The unique elements of an array are the
 * elements that appear exactly once in the array.
 *
 * Return the sum of all the unique elements of nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  const map = new Map();
  nums.forEach(n => map.set(n, (map.get(n) || 0) + 1));

  return [...map].reduce((sum, [key, value]) => {
    return sum + (value === 1 ? key : 0);
  }, 0);
};
