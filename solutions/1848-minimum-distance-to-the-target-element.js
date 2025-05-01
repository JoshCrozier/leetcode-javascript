/**
 * 1848. Minimum Distance to the Target Element
 * https://leetcode.com/problems/minimum-distance-to-the-target-element/
 * Difficulty: Easy
 *
 * Given an integer array nums (0-indexed) and two integers target and start, find an index i
 * such that nums[i] == target and abs(i - start) is minimized. Note that abs(x) is the absolute
 * value of x.
 *
 * Return abs(i - start).
 *
 * It is guaranteed that target exists in nums.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
  let result = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      const distance = Math.abs(i - start);
      result = Math.min(result, distance);
    }
  }

  return result;
};
