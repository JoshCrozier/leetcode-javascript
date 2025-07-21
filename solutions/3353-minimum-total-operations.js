/**
 * 3353. Minimum Total Operations
 * https://leetcode.com/problems/minimum-total-operations/
 * Difficulty: Easy
 *
 * Given an array of integers nums, you can perform any number of operations on this array.
 *
 * In each operation, you can:
 * - Choose a prefix of the array.
 * - Choose an integer k (which can be negative) and add k to each element in the chosen prefix.
 *
 * A prefix of an array is a subarray that starts from the beginning of the array and extends to
 * any point within it.
 *
 * Return the minimum number of operations required to make all elements in arr equal.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let result = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      result++;
    }
  }

  return result;
};
