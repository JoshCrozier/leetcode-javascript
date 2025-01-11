/**
 * 485. Max Consecutive Ones
 * https://leetcode.com/problems/max-consecutive-ones/
 * Difficulty: Easy
 *
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  for (let i = 0, count = 0; i < nums.length; i++) {
    count = nums[i] ? count + 1 : 0;
    max = Math.max(max, count);
  }
  return max;
};
