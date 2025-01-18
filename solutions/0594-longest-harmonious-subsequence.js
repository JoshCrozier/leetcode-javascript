/**
 * 594. Longest Harmonious Subsequence
 * https://leetcode.com/problems/longest-harmonious-subsequence/
 * Difficulty: Easy
 *
 * We define a harmonious array as an array where the difference between its maximum
 * value and its minimum value is exactly 1.
 *
 * Given an integer array nums, return the length of its longest harmonious subsequence
 * among all its possible subsequences.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const map = new Map();
  nums.forEach(n => map.set(n, (map.get(n) ?? 0) + 1));

  return Array.from(map).reduce((result, [n, count]) => {
    return map.has(n + 1) ? Math.max(result, count + map.get(n + 1)) : result;
  }, 0);
};
