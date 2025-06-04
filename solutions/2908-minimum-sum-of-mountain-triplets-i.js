/**
 * 2908. Minimum Sum of Mountain Triplets I
 * https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/
 * Difficulty: Easy
 *
 * You are given a 0-indexed array nums of integers.
 *
 * A triplet of indices (i, j, k) is a mountain if:
 * - i < j < k
 * - nums[i] < nums[j] and nums[k] < nums[j]
 *
 * Return the minimum possible sum of a mountain triplet of nums. If no such triplet exists,
 * return -1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
  let minSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] < nums[j] && nums[k] < nums[j]) {
          minSum = Math.min(minSum, nums[i] + nums[j] + nums[k]);
        }
      }
    }
  }

  return minSum === Infinity ? -1 : minSum;
};
