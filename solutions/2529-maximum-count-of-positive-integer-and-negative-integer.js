/**
 * 2529. Maximum Count of Positive Integer and Negative Integer
 * https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/
 * Difficulty: Easy
 *
 * Given an array nums sorted in non-decreasing order, return the maximum
 * between the number of positive integers and the number of negative integers.
 *
 * In other words, if the number of positive integers in nums is pos and the
 * number of negative integers is neg, then return the maximum of pos and neg.
 *
 * Note that 0 is neither positive nor negative.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
  const result = nums.reduce(([neg = 0, pos = 0], n) => {
    return [neg + (n < 0 ? 1 : 0), pos + (n > 0 ? 1 : 0)];
  }, []);
  return Math.max(...result);
};
