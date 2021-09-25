/**
 * 219. Contains Duplicate II
 * https://leetcode.com/problems/contains-duplicate-ii/
 * Difficulty: Easy
 *
 * Given an integer array `nums` and an integer `k`, return `true` if there are
 * two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]`
 * and `abs(i - j) <= k`.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(i - map.get(nums[i])) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }

  return false;
};
