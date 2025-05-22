/**
 * 2395. Find Subarrays With Equal Sum
 * https://leetcode.com/problems/find-subarrays-with-equal-sum/
 * Difficulty: Easy
 *
 * Given a 0-indexed integer array nums, determine whether there exist two subarrays of length
 * 2 with equal sum. Note that the two subarrays must begin at different indices.
 *
 * Return true if these subarrays exist, and false otherwise.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
  const set = new Set();

  for (let i = 0; i < nums.length - 1; i++) {
    const sum = nums[i] + nums[i + 1];
    if (set.has(sum)) return true;
    set.add(sum);
  }

  return false;
};
