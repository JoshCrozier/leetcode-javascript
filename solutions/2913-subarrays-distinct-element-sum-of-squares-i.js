/**
 * 2913. Subarrays Distinct Element Sum of Squares I
 * https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums.
 *
 * The distinct count of a subarray of nums is defined as:
 * - Let nums[i..j] be a subarray of nums consisting of all the indices from i to j such
 *   that 0 <= i <= j < nums.length. Then the number of distinct values in nums[i..j] is
 *   called the distinct count of nums[i..j].
 *
 * Return the sum of the squares of distinct counts of all subarrays of nums.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const set = new Set();
    for (let j = i; j < nums.length; j++) {
      set.add(nums[j]);
      result += set.size * set.size;
    }
  }

  return result;
};
