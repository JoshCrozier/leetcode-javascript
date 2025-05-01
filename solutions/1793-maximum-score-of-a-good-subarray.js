/**
 * 1793. Maximum Score of a Good Subarray
 * https://leetcode.com/problems/maximum-score-of-a-good-subarray/
 * Difficulty: Hard
 *
 * You are given an array of integers nums (0-indexed) and an integer k.
 *
 * The score of a subarray (i, j) is defined as min(nums[i], nums[i+1], ..., nums[j]) *
 * (j - i + 1). A good subarray is a subarray where i <= k <= j.
 *
 * Return the maximum possible score of a good subarray.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
  let result = nums[k];
  let minimum = nums[k];
  let left = k;
  let right = k;
  const length = nums.length;

  while (left > 0 || right < length - 1) {
    const leftValue = left > 0 ? nums[left - 1] : 0;
    const rightValue = right < length - 1 ? nums[right + 1] : 0;

    if (leftValue >= rightValue) {
      left--;
      minimum = Math.min(minimum, leftValue);
    } else {
      right++;
      minimum = Math.min(minimum, rightValue);
    }

    result = Math.max(result, minimum * (right - left + 1));
  }

  return result;
};
