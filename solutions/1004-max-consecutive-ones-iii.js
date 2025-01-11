/**
 * 1004. Max Consecutive Ones III
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 * Difficulty: Medium
 *
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's
 * in the array if you can flip at most k 0's.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (!nums[right]) k--;
    if (k < 0) {
      if (!nums[left]) k++;
      left++;
    }
    right++;
  }

  return right - left;
};
