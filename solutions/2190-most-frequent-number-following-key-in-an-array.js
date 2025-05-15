/**
 * 2190. Most Frequent Number Following Key In an Array
 * https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums. You are also given an integer key, which is
 * present in nums.
 *
 * For every unique integer target in nums, count the number of times target immediately follows
 * an occurrence of key in nums. In other words, count the number of indices i such that:
 * - 0 <= i <= nums.length - 2,
 * - nums[i] == key and,
 * - nums[i + 1] == target.
 *
 * Return the target with the maximum count. The test cases will be generated such that the target
 * with maximum count is unique.
 */

/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
  const frequency = new Map();
  let maxCount = 0;
  let result = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      const target = nums[i + 1];
      const count = (frequency.get(target) || 0) + 1;
      frequency.set(target, count);

      if (count > maxCount) {
        maxCount = count;
        result = target;
      }
    }
  }

  return result;
};
