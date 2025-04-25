/**
 * 1671. Minimum Number of Removals to Make Mountain Array
 * https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/
 * Difficulty: Hard
 *
 * You may recall that an array arr is a mountain array if and only if:
 * - arr.length >= 3
 * - There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
 *   - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
 *   - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 *
 * Given an integer array nums, return the minimum number of elements to remove to make
 * nums a mountain array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
  const length = nums.length;
  const leftLIS = new Array(length).fill(1);
  const rightLIS = new Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        leftLIS[i] = Math.max(leftLIS[i], leftLIS[j] + 1);
      }
    }
  }

  for (let i = length - 2; i >= 0; i--) {
    for (let j = length - 1; j > i; j--) {
      if (nums[i] > nums[j]) {
        rightLIS[i] = Math.max(rightLIS[i], rightLIS[j] + 1);
      }
    }
  }

  let maxMountainLength = 0;
  for (let i = 1; i < length - 1; i++) {
    if (leftLIS[i] > 1 && rightLIS[i] > 1) {
      maxMountainLength = Math.max(maxMountainLength, leftLIS[i] + rightLIS[i] - 1);
    }
  }

  return length - maxMountainLength;
};
