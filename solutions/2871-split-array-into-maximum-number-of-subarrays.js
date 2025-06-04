/**
 * 2871. Split Array Into Maximum Number of Subarrays
 * https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/
 * Difficulty: Medium
 *
 * You are given an array nums consisting of non-negative integers.
 *
 * We define the score of subarray nums[l..r] such that l <= r as nums[l] AND nums[l + 1]
 * AND ... AND nums[r] where AND is the bitwise AND operation.
 *
 * Consider splitting the array into one or more subarrays such that the following conditions
 * are satisfied:
 * - Each element of the array belongs to exactly one subarray.
 * - The sum of scores of the subarrays is the minimum possible.
 *
 * Return the maximum number of subarrays in a split that satisfies the conditions above.
 *
 * A subarray is a contiguous part of an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarrays = function(nums) {
  const total = nums.reduce((acc, num) => acc & num, nums[0]);
  if (total !== 0) return 1;

  let result = 0;
  let current = -1;

  for (const num of nums) {
    current = current === -1 ? num : current & num;
    if (current === 0) {
      result++;
      current = -1;
    }
  }

  return result;
};
