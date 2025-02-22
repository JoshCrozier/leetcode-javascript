/**
 * 330. Patching Array
 * https://leetcode.com/problems/patching-array/
 * Difficulty: Hard
 *
 * Given a sorted integer array nums and an integer n, add/patch elements to the array such
 * that any number in the range [1, n] inclusive can be formed by the sum of some elements
 * in the array.
 *
 * Return the minimum number of patches required.
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
  let result = 0;

  for (let i = 0, k = 1; k <= n;) {
    if (i < nums.length && nums[i] <= k) {
      k += nums[i++];
    } else {
      k += k;
      result++;
    }
  }

  return result;
};
