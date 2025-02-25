/**
 * 128. Longest Consecutive Sequence
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * Difficulty: Medium
 *
 * Given an unsorted array of integers nums, return the length of the longest consecutive
 * elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set(nums);
  let result = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let count = 1;
      let n = num;

      while (set.has(n + 1)) {
        n++;
        count++;
      }
      result = Math.max(result, count);
    }
  }

  return result;
};
