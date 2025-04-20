/**
 * 1567. Maximum Length of Subarray With Positive Product
 * https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/
 * Difficulty: Medium
 *
 * Given an array of integers nums, find the maximum length of a subarray where the product of
 * all its elements is positive.
 *
 * A subarray of an array is a consecutive sequence of zero or more values taken out of that array.
 *
 * Return the maximum length of a subarray with positive product.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
  let result = 0;
  let positiveCount = 0;
  let negativeCount = 0;
  let firstNegativeIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      positiveCount = 0;
      negativeCount = 0;
      firstNegativeIndex = -1;
      continue;
    }

    if (nums[i] > 0) {
      positiveCount++;
    } else {
      negativeCount++;
      if (firstNegativeIndex === -1) {
        firstNegativeIndex = i;
      }
    }

    if (negativeCount % 2 === 0) {
      result = Math.max(result, positiveCount + negativeCount);
    } else {
      result = Math.max(result, i - firstNegativeIndex);
    }
  }

  return result;
};
