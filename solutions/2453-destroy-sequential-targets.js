/**
 * 2453. Destroy Sequential Targets
 * https://leetcode.com/problems/destroy-sequential-targets/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array nums consisting of positive integers, representing targets
 * on a number line. You are also given an integer space.
 *
 * You have a machine which can destroy targets. Seeding the machine with some nums[i] allows
 * it to destroy all targets with values that can be represented as nums[i] + c * space, where
 * c is any non-negative integer. You want to destroy the maximum number of targets in nums.
 *
 * Return the minimum value of nums[i] you can seed the machine with to destroy the maximum
 * number of targets.
 */

/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
var destroyTargets = function(nums, space) {
  const map = new Map();
  let maxCount = 0;

  for (const num of nums) {
    const remainder = num % space;
    map.set(remainder, (map.get(remainder) || 0) + 1);
    maxCount = Math.max(maxCount, map.get(remainder));
  }

  let result = Infinity;
  for (const num of nums) {
    if (map.get(num % space) === maxCount) {
      result = Math.min(result, num);
    }
  }

  return result;
};
