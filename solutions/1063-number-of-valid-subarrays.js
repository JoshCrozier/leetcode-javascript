/**
 * 1063. Number of Valid Subarrays
 * https://leetcode.com/problems/number-of-valid-subarrays/
 * Difficulty: Hard
 *
 * Given an integer array nums, return the number of non-empty subarrays with the leftmost
 * element of the subarray not larger than other elements in the subarray.
 *
 * A subarray is a contiguous part of an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarrays = function(nums) {
  const n = nums.length;
  const stack = [];
  let result = 0;

  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      const index = stack.pop();
      result += i - index;
    }
    stack.push(i);
  }

  while (stack.length) {
    const index = stack.pop();
    result += n - index;
  }

  return result;
};
