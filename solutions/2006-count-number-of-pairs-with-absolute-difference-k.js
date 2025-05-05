/**
 * 2006. Count Number of Pairs With Absolute Difference K
 * https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
 * Difficulty: Easy
 *
 * Given an integer array nums and an integer k, return the number of pairs (i, j) where
 * i < j such that |nums[i] - nums[j]| == k.
 *
 * The value of |x| is defined as:
 * - x if x >= 0.
 * - -x if x < 0.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
  const map = new Map();
  let result = 0;

  for (const num of nums) {
    result += (map.get(num - k) || 0) + (map.get(num + k) || 0);
    map.set(num, (map.get(num) || 0) + 1);
  }

  return result;
};
