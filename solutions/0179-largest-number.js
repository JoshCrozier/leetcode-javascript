/**
 * 179. Largest Number
 * https://leetcode.com/problems/largest-number/
 * Difficulty: Medium
 *
 * Given a list of non-negative integers nums, arrange them such that they
 * form the largest number.
 *
 * Note: The result may be very large, so you need to return a string
 * instead of an integer.
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  return nums
    .sort((a, b) => `${b}${a}` - `${a}${b}`)
    .join('')
    .replace(/^0+/, 0);
};
