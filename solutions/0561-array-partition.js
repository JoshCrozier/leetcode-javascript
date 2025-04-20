/**
 * 561. Array Partition
 * https://leetcode.com/problems/array-partition/
 * Difficulty: Easy
 *
 * Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1),
 * (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized.
 * Return the maximized sum.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  return nums.sort((a, b) => a - b).reduce((sum, v, i, a) =>
    sum + (i % 2 === 0 ? Math.min(v, a[i + 1]) : 0), 0);
};
