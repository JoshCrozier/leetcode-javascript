/**
 * 2970. Count the Number of Incremovable Subarrays I
 * https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/
 * Difficulty: Easy
 *
 * You are given a 0-indexed array of positive integers nums.
 *
 * A subarray of nums is called incremovable if nums becomes strictly increasing on removing the
 * subarray. For example, the subarray [3, 4] is an incremovable subarray of [5, 3, 4, 6, 7] because
 * removing this subarray changes the array [5, 3, 4, 6, 7] to [5, 6, 7] which is strictly
 * increasing.
 *
 * Return the total number of incremovable subarrays of nums.
 *
 * Note that an empty array is considered strictly increasing.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function(nums) {
  let result = 0;

  for (let start = 0; start < nums.length; start++) {
    for (let end = start; end < nums.length; end++) {
      let isIncreasing = true;
      let prev = -Infinity;

      for (let i = 0; i < nums.length; i++) {
        if (i >= start && i <= end) continue;
        if (nums[i] <= prev) {
          isIncreasing = false;
          break;
        }
        prev = nums[i];
      }

      if (isIncreasing) result++;
    }
  }

  return result;
};
