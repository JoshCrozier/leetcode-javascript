/**
 * 209. Minimum Size Subarray Sum
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * Difficulty: Medium
 *
 * Given an array of positive integers nums and a positive integer target, return the
 * minimal length of a subarray whose sum is greater than or equal to target. If there
 * is no such subarray, return 0 instead.
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let result = Infinity;

  for (let right = 0, sum = 0, left = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      result = Math.min(result, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return result === Infinity ? 0 : result;
};
