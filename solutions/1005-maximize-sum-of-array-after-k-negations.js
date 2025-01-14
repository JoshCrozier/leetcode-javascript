/**
 * 1005. Maximize Sum Of Array After K Negations
 * https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/
 * Difficulty: Easy
 *
 * Given an integer array nums and an integer k, modify the array in the following way:
 * - choose an index i and replace nums[i] with -nums[i].
 *
 * You should apply this process exactly k times. You may choose the same index i
 * multiple times.
 *
 * Return the largest possible sum of the array after modifying it in this way.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  while (k) {
    const i = nums.indexOf(Math.min(...nums));
    nums[i] *= -1;
    k--;
  }
  return nums.reduce((sum, n) => sum + n, 0);
};
