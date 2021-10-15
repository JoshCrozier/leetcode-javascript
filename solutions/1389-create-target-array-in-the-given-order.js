/**
 * 1389. Create Target Array in the Given Order
 * https://leetcode.com/problems/create-target-array-in-the-given-order/
 * Difficulty: Easy
 *
 * Given two arrays of integers nums and index. Your task is to create target array
 * under the following rules:
 *
 * - Initially target array is empty.
 * - From left to right read nums[i] and index[i], insert at index index[i] the value
 * nums[i] in target array.
 * - Repeat the previous step until there are no elements to read in nums and index.
 * - Return the target array.
 *
 * It is guaranteed that the insertion operations will be valid.
 */

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  const result = [];
  index.forEach((i, j) => result.splice(i, 0, nums[j]));
  return result;
};
