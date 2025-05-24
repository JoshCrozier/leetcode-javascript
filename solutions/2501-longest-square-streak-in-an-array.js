/**
 * 2501. Longest Square Streak in an Array
 * https://leetcode.com/problems/longest-square-streak-in-an-array/
 * Difficulty: Medium
 *
 * You are given an integer array nums. A subsequence of nums is called a square streak if:
 * - The length of the subsequence is at least 2, and
 * - after sorting the subsequence, each element (except the first element) is the square of
 *   the previous number.
 *
 * Return the length of the longest square streak in nums, or return -1 if there is no square
 * streak.
 *
 * A subsequence is an array that can be derived from another array by deleting some or no
 * elements without changing the order of the remaining elements.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
  const set = new Set(nums);
  let result = -1;

  for (const num of nums) {
    let current = num;
    let length = 1;

    while (current <= 100000 && set.has(current * current)) {
      current *= current;
      length++;
    }

    if (length >= 2) {
      result = Math.max(result, length);
    }
  }

  return result;
};
