/**
 * 2966. Divide Array Into Arrays With Max Difference
 * https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/
 * Difficulty: Medium
 *
 * You are given an integer array nums of size n where n is a multiple of 3 and a positive
 * integer k.
 *
 * Divide the array nums into n / 3 arrays of size 3 satisfying the following condition:
 * - The difference between any two elements in one array is less than or equal to k.
 *
 * Return a 2D array containing the arrays. If it is impossible to satisfy the conditions, return
 * an empty array. And if there are multiple answers, return any of them.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i + 2] - nums[i] > k) {
      return [];
    }
    result.push([nums[i], nums[i + 1], nums[i + 2]]);
  }

  return result;
};
