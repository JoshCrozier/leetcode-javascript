/**
 * 3034. Number of Subarrays That Match a Pattern I
 * https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums of size n, and a 0-indexed integer array pattern
 * of size m consisting of integers -1, 0, and 1.
 *
 * A subarray nums[i..j] of size m + 1 is said to match the pattern if the following conditions
 * hold for each element pattern[k]:
 * - nums[i + k + 1] > nums[i + k] if pattern[k] == 1.
 * - nums[i + k + 1] == nums[i + k] if pattern[k] == 0.
 * - nums[i + k + 1] < nums[i + k] if pattern[k] == -1.
 *
 * Return the count of subarrays in nums that match the pattern.
 */

/**
 * @param {number[]} nums
 * @param {number[]} pattern
 * @return {number}
 */
var countMatchingSubarrays = function(nums, pattern) {
  let result = 0;
  const m = pattern.length;

  for (let i = 0; i <= nums.length - m - 1; i++) {
    let isMatch = true;
    for (let j = 0; j < m; j++) {
      const diff = nums[i + j + 1] - nums[i + j];
      if ((pattern[j] === 1 && diff <= 0) || (pattern[j] === 0 && diff !== 0)
          || (pattern[j] === -1 && diff >= 0)) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) result++;
  }

  return result;
};
