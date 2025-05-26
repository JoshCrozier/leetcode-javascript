/**
 * 2588. Count the Number of Beautiful Subarrays
 * https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums. In one operation, you can:
 * - Choose two different indices i and j such that 0 <= i, j < nums.length.
 * - Choose a non-negative integer k such that the kth bit (0-indexed) in the binary representation
 *   of nums[i] and nums[j] is 1.
 * - Subtract 2k from nums[i] and nums[j].
 *
 * A subarray is beautiful if it is possible to make all of its elements equal to 0 after applying
 * the above operation any number of times.
 *
 * Return the number of beautiful subarrays in the array nums.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function(nums) {
  let result = 0;
  const prefixXOR = new Map([[0, 1]]);
  let currentXOR = 0;

  for (const num of nums) {
    currentXOR ^= num;
    result += prefixXOR.get(currentXOR) || 0;
    prefixXOR.set(currentXOR, (prefixXOR.get(currentXOR) || 0) + 1);
  }

  return result;
};
