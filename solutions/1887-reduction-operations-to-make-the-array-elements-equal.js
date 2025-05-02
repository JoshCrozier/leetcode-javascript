/**
 * 1887. Reduction Operations to Make the Array Elements Equal
 * https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/
 * Difficulty: Medium
 *
 * Given an integer array nums, your goal is to make all elements in nums equal. To complete one
 * operation, follow these steps:
 * 1. Find the largest value in nums. Let its index be i (0-indexed) and its value be largest.
 *    If there are multiple elements with the largest value, pick the smallest i.
 * 2. Find the next largest value in nums strictly smaller than largest. Let its value be
 *    nextLargest.
 * 3. Reduce nums[i] to nextLargest.
 *
 * Return the number of operations to make all elements in nums equal.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
  nums.sort((a, b) => a - b);
  let result = 0;
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      count++;
    }
    result += count;
  }

  return result;
};
