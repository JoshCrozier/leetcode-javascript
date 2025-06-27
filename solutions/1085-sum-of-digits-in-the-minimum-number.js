/**
 * 1085. Sum of Digits in the Minimum Number
 * https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/
 * Difficulty: Easy
 *
 * Given an integer array nums, return 0 if the sum of the digits of the minimum
 * integer in nums is odd, or 1 otherwise.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfDigits = function(nums) {
  const digitSum = Math.min(...nums)
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit), 0);

  return digitSum % 2 === 0 ? 1 : 0;
};
