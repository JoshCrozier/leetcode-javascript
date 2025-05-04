/**
 * 1995. Count Special Quadruplets
 * https://leetcode.com/problems/count-special-quadruplets/
 * Difficulty: Easy
 *
 * Given a 0-indexed integer array nums, return the number of distinct quadruplets
 * (a, b, c, d) such that:
 * - nums[a] + nums[b] + nums[c] == nums[d], and
 * - a < b < c < d
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
  const map = new Map();
  let result = 0;

  for (let c = nums.length - 2; c >= 2; c--) {
    map.set(nums[c + 1], (map.get(nums[c + 1]) || 0) + 1);
    for (let a = 0; a < c - 1; a++) {
      for (let b = a + 1; b < c; b++) {
        const sum = nums[a] + nums[b] + nums[c];
        result += map.get(sum) || 0;
      }
    }
  }

  return result;
};
