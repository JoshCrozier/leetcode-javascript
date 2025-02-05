/**
 * 228. Summary Ranges
 * https://leetcode.com/problems/summary-ranges/
 * Difficulty: Easy
 *
 * You are given a sorted unique integer array nums.
 *
 * A range [a,b] is the set of all integers from a to b (inclusive).
 *
 * Return the smallest sorted list of ranges that cover all the numbers in the
 * array exactly. That is, each element of nums is covered by exactly one of
 * the ranges, and there is no integer x such that x is in one of the ranges
 * but not in nums.
 *
 * Each range [a,b] in the list should be output as:
 * - "a->b" if a != b
 * - "a" if a == b
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const result = [];
  for (let i = 0, n = nums[0]; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      result.push(nums[i] === n ? `${n}` : `${n}->${nums[i]}`);
      n = nums[i + 1];
    }
  }
  return result;
};
