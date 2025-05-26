/**
 * 2592. Maximize Greatness of an Array
 * https://leetcode.com/problems/maximize-greatness-of-an-array/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums. You are allowed to permute nums into a new
 * array perm of your choosing.
 *
 * We define the greatness of nums be the number of indices 0 <= i < nums.length for which
 * perm[i] > nums[i].
 *
 * Return the maximum possible greatness you can achieve after permuting nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function(nums) {
  nums.sort((a, b) => a - b);
  let result = 0;
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[j] > nums[i]) {
      result++;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return result;
};
