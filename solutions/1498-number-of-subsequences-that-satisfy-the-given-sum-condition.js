/**
 * 1498. Number of Subsequences That Satisfy the Given Sum Condition
 * https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
 * Difficulty: Medium
 *
 * You are given an array of integers nums and an integer target.
 *
 * Return the number of non-empty subsequences of nums such that the sum of the minimum and
 * maximum element on it is less or equal to target. Since the answer may be too large,
 * return it modulo 109 + 7.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
  const MOD = 1e9 + 7;
  const sortedNums = nums.sort((a, b) => a - b);
  const length = nums.length;
  let result = 0;
  const powers = new Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    powers[i] = (powers[i - 1] * 2) % MOD;
  }

  let left = 0;
  let right = length - 1;

  while (left <= right) {
    if (sortedNums[left] + sortedNums[right] <= target) {
      result = (result + powers[right - left]) % MOD;
      left++;
    } else {
      right--;
    }
  }

  return result;
};
