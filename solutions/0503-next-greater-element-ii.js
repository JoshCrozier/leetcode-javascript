/**
 * 503. Next Greater Element II
 * https://leetcode.com/problems/next-greater-element-ii/
 * Difficulty: Medium
 *
 * Given a circular integer array nums (i.e., the next element of
 * nums[nums.length - 1] is nums[0]), return the next greater number
 * for every element in nums.
 *
 * The next greater number of a number x is the first greater number
 * to its traversing-order next in the array, which means you could
 * search circularly to find its next greater number. If it doesn't
 * exist, return -1 for this number.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const total = nums.length;
  const result = new Array(total).fill(-1);
  const stack = [];

  for (let i = 0; i < 2 * total; i++) {
    while (stack.length && nums[i % total] > nums[stack[stack.length - 1]]) {
      result[stack.pop()] = nums[i % total];
    }
    stack.push(i % total);
  }

  return result;
};
