/**
 * 3046. Split the Array
 * https://leetcode.com/problems/split-the-array/
 * Difficulty: Easy
 *
 * You are given an integer array nums of even length. You have to split the array into two
 * parts nums1 and nums2 such that:
 * - nums1.length == nums2.length == nums.length / 2.
 * - nums1 should contain distinct elements.
 * - nums2 should also contain distinct elements.
 *
 * Return true if it is possible to split the array, and false otherwise.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > 2) return false;
  }

  return true;
};
