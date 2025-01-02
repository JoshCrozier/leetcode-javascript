/**
 * 3396. Minimum Number of Operations to Make Elements in Array Distinct
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/
 * Difficulty: Easy
 *
 * You are given an integer array nums. You need to ensure that the elements in the array are
 * distinct. To achieve this, you can perform the following operation any number of times:
 * - Remove 3 elements from the beginning of the array. If the array has fewer than 3 elements,
 *   remove all remaining elements.
 * Note that an empty array is considered to have distinct elements. Return the minimum number
 * of operations needed to make the elements in the array distinct.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  const unique = new Set();

  for (let i = nums.length - 1; i > -1; i--) {
    if (unique.has(nums[i])) {
      return Math.ceil((i + 1) / 3);
    }
    unique.add(nums[i]);
  }

  return 0;
};
