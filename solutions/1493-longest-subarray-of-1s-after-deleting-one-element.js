/**
 * 1493. Longest Subarray of 1's After Deleting One Element
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
 * Difficulty: Medium
 *
 * Given a binary array nums, you should delete one element from it.
 *
 * Return the size of the longest non-empty subarray containing only 1's in the
 * resulting array. Return 0 if there is no such subarray.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  const grouped = nums.join('').split('0').map(s => s.length);
  let max = 0;

  for (let i = 0; i < grouped.length; i++) {
    max = Math.max(
      max,
      (grouped[i - 1] ?? 0) + grouped[i],
      grouped[i] + (grouped[i + 1] ?? 0)
    );
  }

  return max - (nums.includes(0) ? 0 : 1);
};
