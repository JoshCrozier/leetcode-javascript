/**
 * 1330. Reverse Subarray To Maximize Array Value
 * https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/
 * Difficulty: Hard
 *
 * You are given an integer array nums. The value of this array is defined as the sum
 * of |nums[i] - nums[i + 1]| for all 0 <= i < nums.length - 1.
 *
 * You are allowed to select any subarray of the given array and reverse it. You can
 * perform this operation only once.
 *
 * Find maximum possible value of the final array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxValueAfterReverse = function(nums) {
  let baseSum = 0;
  let maxGain = 0;
  let minPair = Infinity;
  let maxPair = -Infinity;
  const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    baseSum += Math.abs(nums[i] - nums[i + 1]);
    minPair = Math.min(minPair, Math.max(nums[i], nums[i + 1]));
    maxPair = Math.max(maxPair, Math.min(nums[i], nums[i + 1]));
  }

  maxGain = Math.max(0, 2 * (maxPair - minPair));

  for (let i = 0; i < n - 1; i++) {
    const left = i > 0 ? Math.abs(nums[0] - nums[i + 1]) - Math.abs(nums[i] - nums[i + 1]) : 0;
    const right = i < n - 2 ? Math.abs(nums[n - 1] - nums[i]) - Math.abs(nums[i] - nums[i + 1]) : 0;
    maxGain = Math.max(maxGain, left, right);
  }

  return baseSum + maxGain;
};
