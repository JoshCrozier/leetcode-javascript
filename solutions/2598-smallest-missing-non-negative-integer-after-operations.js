/**
 * 2598. Smallest Missing Non-negative Integer After Operations
 * https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums and an integer value.
 *
 * In one operation, you can add or subtract value from any element of nums.
 * - For example, if nums = [1,2,3] and value = 2, you can choose to subtract value from nums[0]
 *   to make nums = [-1,2,3].
 *
 * The MEX (minimum excluded) of an array is the smallest missing non-negative integer in it.
 * - For example, the MEX of [-1,2,3] is 0 while the MEX of [1,0,3] is 2.
 *
 * Return the maximum MEX of nums after applying the mentioned operation any number of times.
 */

/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function(nums, value) {
  const remainderCount = new Map();

  for (const num of nums) {
    const remainder = ((num % value) + value) % value;
    remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
  }

  for (let mex = 0; mex <= nums.length; mex++) {
    const remainder = mex % value;
    if (!remainderCount.has(remainder) || remainderCount.get(remainder) === 0) {
      return mex;
    }
    remainderCount.set(remainder, remainderCount.get(remainder) - 1);
  }

  return nums.length;
};
