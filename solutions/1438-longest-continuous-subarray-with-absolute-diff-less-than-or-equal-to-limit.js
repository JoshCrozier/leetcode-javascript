/**
 * 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 * https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
 * Difficulty: Medium
 *
 * Given an array of integers nums and an integer limit, return the size of the longest non-empty
 * subarray such that the absolute difference between any two elements of this subarray is less than
 * or equal to limit.
 */

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  const maxDeque = [];
  const minDeque = [];
  let result = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] <= nums[right]) {
      maxDeque.pop();
    }
    maxDeque.push(right);

    while (minDeque.length && nums[minDeque[minDeque.length - 1]] >= nums[right]) {
      minDeque.pop();
    }
    minDeque.push(right);

    while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
      if (maxDeque[0] < minDeque[0]) {
        left = maxDeque.shift() + 1;
      } else {
        left = minDeque.shift() + 1;
      }
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
};
