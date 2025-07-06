/**
 * 2036. Maximum Alternating Subarray Sum
 * https://leetcode.com/problems/maximum-alternating-subarray-sum/
 * Difficulty: Medium
 *
 * A subarray of a 0-indexed integer array is a contiguous non-empty sequence of elements
 * within an array.
 *
 * The alternating subarray sum of a subarray that ranges from index i to j (inclusive,
 * 0 <= i <= j < nums.length) is nums[i] - nums[i+1] + nums[i+2] - ... +/- nums[j].
 *
 * Given a 0-indexed integer array nums, return the maximum alternating subarray sum of
 * any subarray of nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumAlternatingSubarraySum = function(nums) {
  let result = -Infinity;
  let positive = -Infinity;
  let negative = -Infinity;

  for (const num of nums) {
    const newPositive = Math.max(negative + num, num);
    const newNegative = positive - num;

    positive = newPositive;
    negative = newNegative;
    result = Math.max(result, positive, negative);
  }

  return result;
};
