/**
 * 2789. Largest Element in an Array after Merge Operations
 * https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array nums consisting of positive integers.
 *
 * You can do the following operation on the array any number of times:
 * - Choose an integer i such that 0 <= i < nums.length - 1 and nums[i] <= nums[i + 1].
 *   Replace the element nums[i + 1] with nums[i] + nums[i + 1] and delete the element
 *   nums[i] from the array.
 *
 * Return the value of the largest element that you can possibly obtain in the final array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function(nums) {
  let result = nums[nums.length - 1];
  let currentSum = result;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] <= currentSum) {
      currentSum += nums[i];
    } else {
      currentSum = nums[i];
    }
    result = Math.max(result, currentSum);
  }

  return result;
};
