/**
 * 2009. Minimum Number of Operations to Make Array Continuous
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/
 * Difficulty: Hard
 *
 * You are given an integer array nums. In one operation, you can replace any element in nums
 * with any integer.
 *
 * nums is considered continuous if both of the following conditions are fulfilled:
 * - All elements in nums are unique.
 * - The difference between the maximum element and the minimum element in nums equals
 *   nums.length - 1.
 *
 * For example, nums = [4, 2, 5, 3] is continuous, but nums = [1, 2, 3, 5, 6] is not continuous.
 *
 * Return the minimum number of operations to make nums continuous.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  const n = nums.length;
  const uniqueNums = [...new Set(nums)].sort((a, b) => a - b);
  let result = n;

  for (let i = 0, j = 0; i < uniqueNums.length; i++) {
    while (j < uniqueNums.length && uniqueNums[j] - uniqueNums[i] <= n - 1) {
      j++;
    }
    result = Math.min(result, n - (j - i));
  }

  return result;
};
