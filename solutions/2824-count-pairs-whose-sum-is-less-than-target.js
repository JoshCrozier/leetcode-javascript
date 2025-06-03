/**
 * 2824. Count Pairs Whose Sum is Less than Target
 * https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/
 * Difficulty: Easy
 *
 * Given a 0-indexed integer array nums of length n and an integer target, return the number
 * of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
  let result = 0;
  let left = 0;
  let right = nums.length - 1;

  nums.sort((a, b) => a - b);

  while (left < right) {
    if (nums[left] + nums[right] < target) {
      result += right - left;
      left++;
    } else {
      right--;
    }
  }

  return result;
};
