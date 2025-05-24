/**
 * 2475. Number of Unequal Triplets in Array
 * https://leetcode.com/problems/number-of-unequal-triplets-in-array/
 * Difficulty: Easy
 *
 * You are given a 0-indexed array of positive integers nums. Find the number of
 * triplets (i, j, k) that meet the following conditions:
 * - 0 <= i < j < k < nums.length
 * - nums[i], nums[j], and nums[k] are pairwise distinct.
 *   - In other words, nums[i] != nums[j], nums[i] != nums[k], and nums[j] != nums[k].
 *
 * Return the number of triplets that meet the conditions.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let result = 0;
  let left = 0;
  const total = nums.length;

  for (const count of map.values()) {
    const right = total - count - left;
    result += left * count * right;
    left += count;
  }

  return result;
};
