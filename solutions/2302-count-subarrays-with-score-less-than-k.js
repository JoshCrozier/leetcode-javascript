/**
 * 2302. Count Subarrays With Score Less Than K
 * https://leetcode.com/problems/count-subarrays-with-score-less-than-k/
 * Difficulty: Hard
 *
 * The score of an array is defined as the product of its sum and its length.
 * - For example, the score of [1, 2, 3, 4, 5] is (1 + 2 + 3 + 4 + 5) * 5 = 75.
 *
 * Given a positive integer array nums and an integer k, return the number of non-empty subarrays
 * of nums whose score is strictly less than k.
 *
 * A subarray is a contiguous sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  let result = 0;
  let currentSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];
    while (currentSum * (right - left + 1) >= k) {
      currentSum -= nums[left];
      left++;
    }
    result += right - left + 1;
  }

  return result;
};
