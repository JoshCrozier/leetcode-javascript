/**
 * 525. Contiguous Array
 * https://leetcode.com/problems/contiguous-array/
 * Difficulty: Medium
 *
 * Given a binary array nums, return the maximum length of a contiguous subarray
 * with an equal number of 0 and 1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  const map = new Map([[0, -1]]);
  let result = 0;

  for (let i = 0, count = 0; i < nums.length; i++) {
    count += nums[i] === 1 ? 1 : -1;
    if (map.has(count)) {
      result = Math.max(result, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }

  return result;
};
