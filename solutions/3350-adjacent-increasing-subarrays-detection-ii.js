/**
 * 3350. Adjacent Increasing Subarrays Detection II
 * https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/
 * Difficulty: Medium
 *
 * Given an array nums of n integers, your task is to find the maximum value of k for which
 * there exist two adjacent subarrays of length k each, such that both subarrays are strictly
 * increasing. Specifically, check if there are two subarrays of length k starting at indices
 * a and b (a < b), where:
 * - Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
 * - The subarrays must be adjacent, meaning b = a + k.
 *
 * Return the maximum possible value of k.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function(nums) {
  const n = nums.length;
  const lengths = new Array(n).fill(1);

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      lengths[i] = lengths[i + 1] + 1;
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    const currentLength = lengths[i];
    result = Math.max(result, Math.floor(currentLength / 2));

    const nextIndex = i + currentLength;
    if (nextIndex < n) {
      const minLength = Math.min(currentLength, lengths[nextIndex]);
      result = Math.max(result, minLength);
    }
  }

  return result;
};
