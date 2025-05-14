/**
 * 2149. Rearrange Array Elements by Sign
 * https://leetcode.com/problems/rearrange-array-elements-by-sign/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums of even length consisting of an equal number
 * of positive and negative integers.
 *
 * You should return the array of nums such that the the array follows the given conditions:
 * 1. Every consecutive pair of integers have opposite signs.
 * 2. For all integers with the same sign, the order in which they were present in nums is
 *    preserved.
 * 3. The rearranged array begins with a positive integer.
 *
 * Return the modified array after rearranging the elements to satisfy the aforementioned
 * conditions.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  const positives = nums.filter(num => num > 0);
  const negatives = nums.filter(num => num < 0);
  const result = [];

  for (let i = 0; i < positives.length; i++) {
    result.push(positives[i], negatives[i]);
  }

  return result;
};
