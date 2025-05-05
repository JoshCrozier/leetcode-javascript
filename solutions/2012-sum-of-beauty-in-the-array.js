/**
 * 2012. Sum of Beauty in the Array
 * https://leetcode.com/problems/sum-of-beauty-in-the-array/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums. For each index i (1 <= i <= nums.length - 2)
 * the beauty of nums[i] equals:
 * - 2, if nums[j] < nums[i] < nums[k], for all 0 <= j < i and for all i < k <= nums.length - 1.
 * - 1, if nums[i - 1] < nums[i] < nums[i + 1], and the previous condition is not satisfied.
 * - 0, if none of the previous conditions holds.
 *
 * Return the sum of beauty of all nums[i] where 1 <= i <= nums.length - 2.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function(nums) {
  const n = nums.length;
  let result = 0;
  const leftMax = new Array(n).fill(nums[0]);
  const rightMin = new Array(n).fill(nums[n - 1]);

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], nums[i - 1]);
  }

  for (let i = n - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], nums[i + 1]);
  }

  for (let i = 1; i < n - 1; i++) {
    if (leftMax[i] < nums[i] && nums[i] < rightMin[i]) {
      result += 2;
    } else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) {
      result += 1;
    }
  }

  return result;
};
