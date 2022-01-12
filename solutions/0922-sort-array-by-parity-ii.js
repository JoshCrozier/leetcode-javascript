/**
 * 922. Sort Array By Parity II
 * https://leetcode.com/problems/sort-array-by-parity-ii/
 * Difficulty: Easy
 *
 * Given an array of integers nums, half of the integers in nums are odd,
 * and the other half are even.
 *
 * Sort the array so that whenever nums[i] is odd, i is odd, and whenever
 * nums[i] is even, i is even.
 *
 * Return any answer array that satisfies this condition.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  let i = 0;
  let j = 1;

  while (i < nums.length && j < nums.length) {
    if (nums[i] % 2 === 0) {
      i += 2;
    } else if (nums[j] % 2 === 1) {
      j += 2;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i += 2;
      j += 2;
    }
  }

  return nums;
};
