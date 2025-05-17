/**
 * 2221. Find Triangular Sum of an Array
 * https://leetcode.com/problems/find-triangular-sum-of-an-array/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and
 * 9 (inclusive).
 *
 * The triangular sum of nums is the value of the only element present in nums after the
 * following process terminates:
 * 1. Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new
 *    0-indexed integer array newNums of length n - 1.
 * 2. For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as
 *    (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
 * 3. Replace the array nums with newNums.
 * 4. Repeat the entire process starting from step 1.
 *
 * Return the triangular sum of nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
  while (nums.length > 1) {
    const updated = [];
    for (let i = 0; i < nums.length - 1; i++) {
      updated.push((nums[i] + nums[i + 1]) % 10);
    }
    nums = updated;
  }
  return nums[0];
};
