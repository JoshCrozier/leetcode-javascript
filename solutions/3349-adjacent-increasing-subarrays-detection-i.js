/**
 * 3349. Adjacent Increasing Subarrays Detection I
 * https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/
 * Difficulty: Easy
 *
 * Given an array nums of n integers and an integer k, determine whether there exist two
 * adjacent subarrays of length k such that both subarrays are strictly increasing.
 * Specifically, check if there are two subarrays starting at indices a and b (a < b),
 * where:
 * - Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
 * - The subarrays must be adjacent, meaning b = a + k.
 *
 * Return true if it is possible to find two such subarrays, and false otherwise.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
  for (let i = 0; i <= nums.length - 2 * k; i++) {
    if (helper(i, k) && helper(i + k, k)) {
      return true;
    }
  }

  return false;

  function helper(start, length) {
    for (let i = start; i < start + length - 1; i++) {
      if (nums[i] >= nums[i + 1]) return false;
    }
    return true;
  }
};
