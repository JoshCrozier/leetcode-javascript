/**
 * 220. Contains Duplicate III
 * https://leetcode.com/problems/contains-duplicate-iii/
 * Difficulty: Hard
 *
 * You are given an integer array nums and two integers indexDiff and valueDiff.
 *
 * Find a pair of indices (i, j) such that:
 * - i != j,
 * - abs(i - j) <= indexDiff.
 * - abs(nums[i] - nums[j]) <= valueDiff, and
 *
 * Return true if such pair exists or false otherwise.
 */

/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
  if (valueDiff < 0) return false;

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const limit = valueDiff + 1;
    const item = Math.floor(nums[i] / limit);

    if (map.has(item)
      || map.has(item - 1) && Math.abs(nums[i] - map.get(item - 1)) < limit
      || map.has(item + 1) && Math.abs(nums[i] - map.get(item + 1)) < limit) {
      return true;
    }

    map.set(item, nums[i]);

    if (i >= indexDiff) {
      map.delete(Math.floor(nums[i - indexDiff] / limit));
    }
  }

  return false;
};
