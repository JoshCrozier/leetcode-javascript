/**
 * 2963. Count the Number of Good Partitions
 * https://leetcode.com/problems/count-the-number-of-good-partitions/
 * Difficulty: Hard
 *
 * You are given a 0-indexed array nums consisting of positive integers.
 *
 * A partition of an array into one or more contiguous subarrays is called good if no two
 * subarrays contain the same number.
 *
 * Return the total number of good partitions of nums.
 *
 * Since the answer may be large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodPartitions = function(nums) {
  const mod = 1e9 + 7;
  const map = new Map();
  let segments = 0;
  let end = -1;

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    if (i > end) {
      segments++;
    }
    end = Math.max(end, map.get(nums[i]));
  }

  let result = 1;
  for (let i = 1; i < segments; i++) {
    result = (result * 2) % mod;
  }

  return result;
};
