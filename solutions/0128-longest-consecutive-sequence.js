/**
 * 128. Longest Consecutive Sequence
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * Difficulty: Medium
 *
 * Given an unsorted array of integers nums, return the length of the
 * longest consecutive elements sequence.
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

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let streak = 1;
      while (set.has(nums[i] + streak)) {
        streak++;
      }
      result = Math.max(result, streak);
    }
  }

  return result;
};
