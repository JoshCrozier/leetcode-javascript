/**
 * 3073. Maximum Increasing Triplet Value
 * https://leetcode.com/problems/maximum-increasing-triplet-value/
 * Difficulty: Medium
 *
 * Given an array nums, return the maximum value of a triplet (i, j, k) such that i < j < k
 * and nums[i] < nums[j] < nums[k].
 *
 * The value of a triplet (i, j, k) is nums[i] - nums[j] + nums[k].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
  const n = nums.length;
  const maxRight = new Array(n).fill(-1);
  let currentMax = 0;
  let result = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] >= currentMax) {
      currentMax = nums[i];
    } else {
      maxRight[i] = currentMax;
    }
  }

  const sortedIndices = Array.from({ length: n }, (_, i) => i)
    .sort((a, b) => nums[a] - nums[b] || b - a);

  const stack = [];

  for (const currentIndex of sortedIndices) {
    while (stack.length > 0 && stack[stack.length - 1] > currentIndex) {
      stack.pop();
    }

    if (stack.length > 0 && maxRight[currentIndex] >= 0) {
      const leftIndex = stack[stack.length - 1];
      const tripletValue = nums[leftIndex] - nums[currentIndex] + maxRight[currentIndex];
      result = Math.max(result, tripletValue);
    }

    stack.push(currentIndex);
  }

  return result;
};
