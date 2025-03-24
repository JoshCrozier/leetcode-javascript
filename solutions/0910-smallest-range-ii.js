/**
 * 910. Smallest Range II
 * https://leetcode.com/problems/smallest-range-ii/
 * Difficulty: Medium
 *
 * You are given an integer array nums and an integer k.
 *
 * For each index i where 0 <= i < nums.length, change nums[i] to be either
 * nums[i] + k or nums[i] - k.
 *
 * The score of nums is the difference between the maximum and minimum elements
 * in nums.
 *
 * Return the minimum score of nums after changing the values at each index.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function(nums, k) {
  nums.sort((a, b) => a - b);

  let result = nums[nums.length - 1] - nums[0];
  for (let i = 0; i < nums.length - 1; i++) {
    const high = Math.max(nums[nums.length - 1] - k, nums[i] + k);
    const low = Math.min(nums[0] + k, nums[i + 1] - k);
    result = Math.min(result, high - low);
  }

  return result;
};
