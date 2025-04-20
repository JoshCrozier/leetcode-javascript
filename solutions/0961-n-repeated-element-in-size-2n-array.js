/**
 * 961. N-Repeated Element in Size 2N Array
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 * Difficulty: Easy
 *
 * You are given an integer array nums with the following properties:
 * - nums.length == 2 * n.
 * - nums contains n + 1 unique elements.
 * - Exactly one element of nums is repeated n times.
 *
 * Return the element that is repeated n times.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) map[nums[i]] = 1;
    else return nums[i];
  }
};
