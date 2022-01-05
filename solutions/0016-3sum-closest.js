/**
 * 16. 3Sum Closest
 * https://leetcode.com/problems/3sum-closest/
 * Difficulty: Medium
 *
 * Given an integer array nums of length n and an integer target, find three integers
 * in nums such that the sum is closest to target.
 *
 * Return the sum of the three integers.
 *
 * You may assume that each input would have exactly one solution.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const sums = new Set();

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      sums.add(sum);
      if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }

  return [...sums].reduce((p, c) => Math.abs(c - target) < Math.abs(p - target) ? c : p);
};
