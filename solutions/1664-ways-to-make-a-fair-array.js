/**
 * 1664. Ways to Make a Fair Array
 * https://leetcode.com/problems/ways-to-make-a-fair-array/
 * Difficulty: Medium
 *
 * You are given an integer array nums. You can choose exactly one index (0-indexed) and remove
 * the element. Notice that the index of the elements may change after the removal.
 *
 * For example, if nums = [6,1,7,4,1]:
 * - Choosing to remove index 1 results in nums = [6,7,4,1].
 * - Choosing to remove index 2 results in nums = [6,1,4,1].
 * - Choosing to remove index 4 results in nums = [6,1,7,4].
 *
 * An array is fair if the sum of the odd-indexed values equals the sum of the even-indexed values.
 *
 * Return the number of indices that you could choose such that after the removal, nums is fair.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
  let evenSum = 0;
  let oddSum = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) evenSum += nums[i];
    else oddSum += nums[i];
  }

  let currentEven = 0;
  let currentOdd = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      evenSum -= nums[i];
      if (currentEven + oddSum === currentOdd + evenSum) result++;
      currentEven += nums[i];
    } else {
      oddSum -= nums[i];
      if (currentEven + oddSum === currentOdd + evenSum) result++;
      currentOdd += nums[i];
    }
  }

  return result;
};
